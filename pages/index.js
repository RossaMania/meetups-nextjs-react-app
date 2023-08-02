// our-domain.com/new-meetup

import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {

  return <MeetupList meetups={props.meetups} />

}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {

  const username = process.env.MONGODB_USERNAME;
  const password = process.env.MONGODB_PASSWORD;

// fetch data from an API
 const client = await MongoClient.connect(
   `mongodb+srv://${username}:${password}@cluster0.nfyp4en.mongodb.net/meetups?retryWrites=true&w=majority`
 );

 const db = client.db();

 const meetupsCollection = db.collection("meetups");

 const meetups = await meetupsCollection.find().toArray();

 client.close();

return {
props: {
  meetups: meetups.map(meetup => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString(),
  }))
},
revalidate: 10
};

}

export default HomePage;
