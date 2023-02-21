class SlidingCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'slide', label: 'Slide'},
      {id: 'stop', label: 'Get up'},
      // Task 7: Reset me to re-slide
    ];

    super(props);
  }
}
