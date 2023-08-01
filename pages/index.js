// our-domain.com/new-meetup

import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";

function HomePage() {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A First Meetup",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/6/2016/07/slimer.jpg",
      address: "Some address.",
      description: "This is a meetup.",
    },
    {
      id: "m2",
      title: "Another Meetup",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/6/2016/07/slimer.jpg",
      address: "Some address.",
      description: "This is a meetup.",
    },
  ];
  return (
  <Layout>
    <MeetupList meetups={DUMMY_MEETUPS} />;
  </Layout>
  )
}

export default HomePage;
