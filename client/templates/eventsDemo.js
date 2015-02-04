Transitionable.registerMethod('spring',
  famous.transitions.SpringTransition);

var springTransition = {
  method: "spring",
  period: 100,
  dampingRatio: .1,
  velocity: 0.005
}

Template.springBall.events({
  'mouseover': function(event, tpl) {
    var fview = FView.from(tpl);
    fview.modifier.halt();
    fview.modifier.setTransform(
      Transform.translate(
        Math.random()*(window.innerWidth-50),
        Math.random()*(window.innerHeight-50),
        90
      ),
      springTransition
    );
  }
});