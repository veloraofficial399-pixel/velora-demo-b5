// Single source of truth for the invitation. Edit here; components read from this.
export const invite = {
  couple: {
    bride: 'Ishita Agarwal',
    brideShort: 'Ishita',
    groom: 'Vikram Sharma',
    groomShort: 'Vikram',
    hashtag: '#Vishita',
  },
  invite: {
    kicker: 'Together with their families',
    line: 'cordially invite you to celebrate their engagement',
  },
  families: {
    groom: {
      label: 'The Groom',
      name: 'Vikram Sharma',
      parents: 'S/O Mr. Rajendra Sharma & Mrs. Sunita Sharma',
    },
    bride: {
      label: 'The Bride',
      name: 'Ishita Agarwal',
      parents: 'D/O Mr. Anil Agarwal & Mrs. Rekha Agarwal',
    },
  },
  event: {
    title: 'The Engagement of Vikram & Ishita',
    startsAt: '2027-10-23T17:00:00+05:30',
    endsAt: '2027-10-23T21:00:00+05:30', // assumed; adjust if needed
    dateLabel: '23 . 10 . 2027',
    dayLabel: 'Saturday',
    timeLabel: '5 PM onwards',
    dressCode: 'Traditional / Festive Attire',
    note: 'Dinner to follow',
  },
  venue: {
    name: 'The Sapphire Convention Hall',
    address: 'Outer Ring Road, Marathahalli, Bengaluru, Karnataka 560037',
    url: 'https://www.google.com/maps/search/?api=1&query=Marathahalli%2C%20Bengaluru%2C%20Karnataka',
  },
  // Placeholder story copy (no dates invented). Edit freely.
  // `position` picks which part of the painting shows inside the arch frame.
  story: [
    {
      label: 'Chapter One',
      title: 'The First Meeting',
      text: 'A warm introduction, shared smiles, and a conversation that effortlessly turned into something meaningful.',
      image: '/assets/couple-3.jpg',
      position: '50% 22%',
    },
    {
      label: 'Chapter Two',
      title: 'Growing Together',
      text: 'Cherished memories, mutual understanding, and two souls discovering their perfect match.',
      image: '/assets/couple-2.jpg',
      position: '50% 40%',
    },
    {
      label: 'Chapter Three',
      title: 'The Engagement',
      text: 'Surrounded by our loved ones, we celebrate this joyous milestone and begin our journey together.',
      image: '/assets/couple-1.jpg',
      position: '50% 30%',
    },
  ],
  blessing: {
    line: 'May your intentions be one, may your hearts beat as one.',
    translation: 'Two families, one thread of gold — and a lifetime of happiness made luminous together.',
    source: 'A blessing from both families',
  },
  footer: {
    families: 'With love & warm wishes from the Families',
  },
}
