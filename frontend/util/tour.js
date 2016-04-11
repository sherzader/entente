var Shepherd = require('tether-shepherd');

var myTour = new Shepherd.Tour({
  lifecyleComplete: false,
  defaults: {
    classes: 'shepherd-theme-arrows'
  }
});

myTour.addStep('day-picker', {
  text: [
    "Let's check out the site's features!"
  ],
  showCancelLink: true,
  buttons: [
    {
      text: 'Begin',
      action: myTour.next
    }
  ]
});

myTour.addStep('day-picker', {
  text: [
    'Click a day to search for a group with events on this day.'
  ],
  showCancelLink: true,
  buttons: [
    {
      text: 'Back',
      action: myTour.back
    },
    {
      text: 'Next',
      action: myTour.next
    }
  ],
  attachTo: '.DayPicker-Day--today left'
});

myTour.addStep('reset', {
  text: [
    "Click 'RESET' to view all groups again."
  ],
  showCancelLink: true,
  buttons: [
    {
      text: 'Back',
      action: myTour.back
    },
    {
      text: 'Next',
      action: myTour.next
    }
  ],
  attachTo: '.cal-caption > span:nth-child(1) left'
});

myTour.addStep('search', {
  text: [
    'Type in an interest and',
    'see if there is an existing group'
  ],
  showCancelLink: true,
  buttons: [
    {
      text: 'Back',
      action: myTour.back
    },
    {
      text: 'Next',
      action: myTour.next
    }
  ],
  attachTo: '.group-search bottom'
});

myTour.addStep('start-group', {
  text: [
    'Nothing comes up?',
    'Start it!'
  ],
  showCancelLink: true,
  buttons: [
    {
      text: 'Back',
      action: myTour.back
    },
    {
      text: 'Next',
      action: myTour.next
    }
  ],
  attachTo: '.nav-item bottom'
});

myTour.addStep('group-item', {
  text: [
    'Click on a group to see its page,',
    'Browse the list of members and their profiles,',
    'And check out or start events!'
  ],
  showCancelLink: true,
  buttons: [
    {
      text: 'Back',
      action: myTour.back
    },
    {
      text: 'Next',
      action: myTour.next
    }
  ],
  attachTo: '.group-caption right'
});

myTour.addStep('finish', {
  text: [
    'Thanks for visiting!'
  ],
  showCancelLink: true,
  buttons: [
    {
      text: 'Back',
      action: myTour.back
    },
    {
      text: 'Finish',
      action: myTour.next
    }
  ],
});


module.exports = myTour;
