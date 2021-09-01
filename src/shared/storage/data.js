const quotes = [
  {
    id: '19B2FB66-D773-4273-8BE2-4E4ED9F6A019',
    quote: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
    person: 'Ellen Ullman',
    year: 1991
  },
  {
    id: 'CC2FF2BE-CC34-4F55-B287-965EEC2EC19A',
    quote: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    person: 'Anonymous',
    year: 1992
  },
  {
    id: '61E7CC26-0B1A-41E7-B7E4-51986B35922E',
    quote: `If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission.`,
    person: 'Grace Hopper',
    year: 1993
  },
  {
    id: '62E400A4-3251-49F6-966C-6758E11D9DFD',
    quote: 'The city’s central computer told you?  R2D2, you know better than to trust a strange computer!',
    person: 'C-3PO',
    year: 1994
  },
  {
    id: '904CFFF6-8971-47E8-A47D-F5B34D229EF1',
    quote: 'I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.',
    person: 'Bjarne Stroustrup',
    year: 1995
  },
  {
    id: '11C62AB2-0647-481F-BBEA-D1D1650CB1E2',
    quote: 'Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.',
    person: 'Ada Lovelace',
    year: 1996
  },
  {
    id: '4CB6751E-4154-4CD5-A0A7-2B916575AC5B',
    quote: 'Java is to JavaScript as ham is to hamster.',
    person: 'Jeremy Keith',
    year: 1990
  },
  {
    id: 'F0923EFA-12F5-465F-9D23-F531DF85934F',
    quote: `The most dangerous phrase in the language is, "We've always done it this way."`,
    person: 'Grace Hopper',
    year: 1990
  },
  {
    id: '216467BA-EB0C-41CF-AC40-8FD34B3FB73E',
    quote: 'As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought.  Debugging had to be discovered.  I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.',
    person: 'Maurice Wilkes',
    year: 1992
  },
  {
    id: 'B27E3931-97E0-427E-A414-6513C80F66ED',
    quote: 'Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.',
    person: 'Bill Gates',
    year: 1993
  },
  {
    id: '97752A48-23D5-4D93-AAE5-47AE7527FCF8',
    quote: 'What one programmer can do in one month, two programmers can do in two months.',
    person: 'Fred Brooks',
    year: 1990
  },
  {
    id: '6679BBA7-9470-44CF-AF55-92B23BBE1942',
    quote: 'The Internet? Is that thing still around?',
    person: 'Homer Simpson',
    year: 1990
  },
  {
    id: '1DE34833-DAE7-45C0-A503-6AADDF515F3B',
    quote: 'If you tell me precisely what it is a machine cannot do, then I can always make a machine which will do just that.',
    person: 'Jon von Neumann',
    year: 1990
  },
  {
    id: 'D69B237C-99C6-47B2-84DF-3F62AAB2E4E4',
    quote: 'I will test you once',
    person: 'John Test',
    year: 1991
  },
  {
    id: '1030836B-D7E5-4128-AE0D-B073C0564463',
    quote: 'I will test you twice',
    person: 'John Test',
    year: 2000
  }
];

const authors = [
  {
    id: "751f4ad9-909c-4027-9640-a680e06586cb",
    name: "Cort Shaw",
    biography: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
  },
  {
    id: "5777f2ad-7dc4-49bf-989f-eaee67311333",
    name: "Woody Meeus",
    biography: "Donec dapibus. Duis at velit eu est congue elementum."
  },
  {
    id: "47fdfc0d-1217-4ba6-9be3-46c11ee6fe00",
    name: "Sabrina McCorry",
    biography: "In blandit ultrices enim."
  },
  {
    id: "6be2bdd1-d83c-483f-bdb2-9ca90629ca41",
    name: "Allene Aggus",
    biography: "Nulla mollis molestie lorem."
  },
  {
    id: "20c3bc7d-ce62-400c-a005-f9e4fd505886",
    name: "Saul Lucchi",
    biography: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum."
  },
  {
    id: "a86aeff0-96d8-454d-b246-45469c67b944",
    name: "Hanni Browne",
    biography: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
  },
  {
    id: "5e6827a8-2b50-4b65-bb95-119514bbd158",
    name: "Giffer Lorait",
    biography: "In hac habitasse platea dictumst."
  },
  {
    id: "0cc8c9d4-74a4-46c2-be3c-1429e81beebf",
    name: "Kingston Durkin",
    biography: "Vivamus vel nulla eget eros elementum pellentesque."
  },
  {
    id: "aa6eb87a-4e91-4e2e-808a-5b63dd463665",
    name: "Yoko Pezey",
    biography: "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
  },
  {
    id: "893585ef-aa12-438f-a5c7-1c095212a609",
    name: "Obediah Clilverd",
    biography: "Duis aliquam convallis nunc."
  }
];

module.exports = {
  quotes,
  authors
};
