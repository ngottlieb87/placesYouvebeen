function Place(City, local, timeOfYear, notes ){
  this.cityName = city,
  this.location = local,
  this.time = timeOfYear,
  this.notes = notes
}

Place.prototype.fullLocation = function(){
  return this.city + " " + this.location;
}

$(document).ready(function(){
  $("#new-city").submit(function(event){
    event.preventDefault();

    var inputtedCityName = $("input#new-city").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedTimeOfYear = $("input#new-time-year").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = new Place(inputtedCityName, inputtedLocation, inputtedTimeOfYear, inputtedNotes);

    $("ul#place").append('<li><span class="place")>' + newPlace.fullLocation() + '</span></li>');

    $(".place").last().click(function())s
  });
});
