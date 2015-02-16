// if (Meteor.isClient) {

//   // Rig some famo.us deps
//   famous.polyfills;
//   famous.core.famous;

//   // Make sure dom got a body...
//   Meteor.startup(function() {
//     var mainContext = famous.core.Engine.createContext();
//     var renderController = new famous.views.RenderController();
//     var surfaces = [];
//     var counter = 0;

//     for (var i = 0; i < 10; i++) {
//         surfaces.push(new famous.core.Surface({
//              content: "Surface: " + (i + 1),
//              size: [200, 200],
//              properties: {
//                  backgroundColor: "hsl(" + (i * 360 / 10) + ", 100%, 50%)",
//                  lineHeight: "200px",
//                  textAlign: 'center'
//              }
//         }));
//     }

//     renderController.show(surfaces[0]);

//     famous.core.Engine.on("click", function() {
//         var next = (counter++ + 1) % surfaces.length;
//         this.show(surfaces[next]);
//     }.bind(renderController));

//     mainContext.add(new famous.core.Modifier({align: [.5, .5], origin: [.5, .5]})).add(renderController);
//   });
// }
