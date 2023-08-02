import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://static.onecms.io/wp-content/uploads/sites/6/2016/07/slimer.jpg"
      title="A Meetup!"
      address="Some address."
      description="The meetup description."
    />
  );
}

export async function getStaticPaths() {

  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.nfyp4en.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.nfyp4en.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({_id: meetupId})

  client.close();

  return {
    props: {
      meetupData: selectedMeetup
    },
  };
}
export default MeetupDetails;
