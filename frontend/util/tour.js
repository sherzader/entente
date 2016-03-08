var Shepherd = require('tether-shepherd');

var myTour = new Shepherd.Tour({
  lifecyleComplete: false,
  defaults: {
    classes: 'shepherd-theme-arrows'
  }
});

myTour.addStep('day-picker', {
  text: [
    'Welcome to the Entente tour!'
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
    'To begin search, click a day.'
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
    'Click to see all groups again.'
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
  attachTo: '.calendar-caption-bottom left'
});

myTour.addStep('group-join', {
  text: [
    'Toggle group membership.',
    'Updates MY GROUPS on Navigation Bar.'
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
  attachTo: '.group-item-join left'
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

myTour.addStep('footer', {
  text: [
    'Interested in the code behind the feature?',
    'Click CODE below to checkout the Github repo!'
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
  attachTo: '.footer-item > a top'
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
