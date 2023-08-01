// our-domain.com/new-meetup

import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";

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

function HomePage() {

  const [loadedMeetups, setLoadedMeetups] = useState();

  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS)
  }, [])

  return <MeetupList meetups={loadedMeetups} />

}

export default HomePage;
