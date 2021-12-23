//ExtendedMind JS lib.
export.getRound = function(value){
  if(value < 1000){
    value = Math.floor(value);
    return value;
  }else if(value >= 1000 && value < 10000){
    value = Math.floor(value/100.0);
    return value + "k"
  }else if(value => 10000){
    value = Math.floor(value/1000.0);
    return value + "k"
  };
};
