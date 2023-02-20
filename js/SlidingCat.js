class SlidingCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'slide', label: 'Slide'},
      // Task 7: Reset me to re-slide
    ];

    super(props);
  }
}
