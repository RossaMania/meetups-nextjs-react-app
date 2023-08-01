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
// fetch data from an API
return {
props: {
  meetups: DUMMY_MEETUPS
},
revalidate: 10
};

}

export default HomePage;
