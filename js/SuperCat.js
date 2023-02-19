class SuperCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'talk', label: 'Talk'}
    ];

    super(props);
    this.language = props.language;
    this.createActions();
  }
}