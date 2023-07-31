import MeetupList from "@/components/meetups/MeetupList";

function HomePage() {

  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A First Meetup",
      image: "https://www.thesmackdownhotel.com/images/wrestling/events/wwe/wrestlemania-38.jpg",
      address: "Some address.",
      description: "This is a meetup.",
    },
    { id: "m2",
      title: "Another Meetup",
      image: "https://www.thesmackdownhotel.com/images/wrestling/events/wwe/wrestlemania-39.jpg",
      address: "Some address.",
      description: "This is a meetup.",
    },
  ]
return (
  <MeetupList meetups={DUMMY_MEETUPS}/>
)
}

export default HomePage;