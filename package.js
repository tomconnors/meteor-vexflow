Package.describe({
  summary: "Vexflow: Music Engraving in JavaScript and HTML5"
});

Package.on_use(function (api, where) {

  //var path = Npm.require('path');

  // api.add_files(path.join('css', 'bootstrap.css'), 'client');
  // api.add_files(path.join('css', 'bootstrap-responsive.css'), 'client');
  // api.add_files(path.join('js', 'bootstrap.js'), 'client');

  api.add_files("vex/src/header.js", "client/compatibility");
  api.add_files("vex/src/vex.js", "client/compatibility");
  api.add_files("vex/src/flow.js", "client/compatibility");
  api.add_files("vex/src/fraction.js", "client/compatibility");
  api.add_files("vex/src/tables.js", "client/compatibility");
  api.add_files("vex/src/fonts/vexflow_font.js", "client/compatibility");
  api.add_files("vex/src/glyph.js", "client/compatibility");
  api.add_files("vex/src/stave.js", "client/compatibility");
  api.add_files("vex/src/staveconnector.js", "client/compatibility");
  api.add_files("vex/src/tabstave.js", "client/compatibility");
  api.add_files("vex/src/tickcontext.js", "client/compatibility");
  api.add_files("vex/src/tickable.js", "client/compatibility");    
  api.add_files("vex/src/note.js", "client/compatibility");
  api.add_files("vex/src/ghostnote.js", "client/compatibility");
  api.add_files("vex/src/stavenote.js", "client/compatibility");
  api.add_files("vex/src/tabnote.js", "client/compatibility");
  api.add_files("vex/src/beam.js", "client/compatibility");
  api.add_files("vex/src/voice.js", "client/compatibility");
  api.add_files("vex/src/voicegroup.js", "client/compatibility");
  api.add_files("vex/src/modifier.js", "client/compatibility");
  api.add_files("vex/src/modifiercontext.js", "client/compatibility");  
  api.add_files("vex/src/accidental.js", "client/compatibility");    
  api.add_files("vex/src/dot.js", "client/compatibility");    
  api.add_files("vex/src/formatter.js", "client/compatibility");
  api.add_files("vex/src/stavetie.js", "client/compatibility");      
  api.add_files("vex/src/tabtie.js", "client/compatibility");
  api.add_files("vex/src/tabslide.js", "client/compatibility");
  api.add_files("vex/src/bend.js", "client/compatibility");   
  api.add_files("vex/src/vibrato.js", "client/compatibility");    
  api.add_files("vex/src/annotation.js", "client/compatibility");
  api.add_files("vex/src/articulation.js", "client/compatibility");  
  api.add_files("vex/src/tuning.js", "client/compatibility");
  api.add_files("vex/src/stavemodifier.js", "client/compatibility");
  api.add_files("vex/src/keysignature.js", "client/compatibility");
  api.add_files("vex/src/timesignature.js", "client/compatibility");  
  api.add_files("vex/src/clef.js", "client/compatibility");
  api.add_files("vex/src/music.js", "client/compatibility");
  api.add_files("vex/src/keymanager.js", "client/compatibility");
  api.add_files("vex/src/renderer.js", "client/compatibility");
  api.add_files("vex/src/raphaelcontext.js", "client/compatibility");
  api.add_files("vex/src/stavebarline.js", "client/compatibility");
  api.add_files("vex/src/stavehairpin.js", "client/compatibility");
  api.add_files("vex/src/stavevolta.js", "client/compatibility");
  api.add_files("vex/src/staverepetition.js", "client/compatibility");  
  api.add_files("vex/src/stavesection.js", "client/compatibility")    ;
  api.add_files("vex/src/stavetempo.js", "client/compatibility");
  api.add_files("vex/src/barnote.js", "client/compatibility");
  api.add_files("vex/src/tremolo.js", "client/compatibility");
  api.add_files("vex/src/tuplet.js", "client/compatibility");
  api.add_files("vex/src/boundingbox.js", "client/compatibility");
  api.add_files("vex/src/textnote.js", "client/compatibility");
  api.add_files("vex/src/frethandfinger.js", "client/compatibility");
  api.add_files("vex/src/stringnumber.js", "client/compatibility");
  api.add_files("vex/src/strokes.js", "client/compatibility");
});