class SlidingCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'slide', label: 'Slide'}
    ];

    super(props);
    this.createActions();
  }

  slide = () => {
    this.addClass('slide');
  }
}
