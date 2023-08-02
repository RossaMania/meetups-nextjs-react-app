import MeetupDetail from "@/components/meetups/MeetupDetail";


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

export function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      image: "https://static.onecms.io/wp-content/uploads/sites/6/2016/07/slimer.jpg",
      id: meetupId,
      title: "A Meetup!",
      address: "Some address.",
      description: "The meetup description.",
    }
  }
}
export default MeetupDetails;
