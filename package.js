Package.describe({
  summary: "Vexflow: Music Engraving in JavaScript and HTML5"
});

Package.on_use(function (api, where) {

  api.add_files("vex/src/header.js", "client");
  //api.add_files("vex/src/vex.js", "client");
  api.add_files("vex.js", "client")
  api.add_files("vex/src/flow.js", "client");
  api.add_files("vex/src/fraction.js", "client");
  api.add_files("vex/src/tables.js", "client");
  api.add_files("vex/src/fonts/vexflow_font.js", "client");
  api.add_files("vex/src/glyph.js", "client");
  api.add_files("vex/src/stave.js", "client");
  api.add_files("vex/src/staveconnector.js", "client");
  api.add_files("vex/src/tabstave.js", "client");
  api.add_files("vex/src/tickcontext.js", "client");
  api.add_files("vex/src/tickable.js", "client");    
  api.add_files("vex/src/note.js", "client");
  api.add_files("vex/src/ghostnote.js", "client");
  api.add_files("vex/src/stavenote.js", "client");
  api.add_files("vex/src/tabnote.js", "client");
  api.add_files("vex/src/beam.js", "client");
  api.add_files("vex/src/voice.js", "client");
  api.add_files("vex/src/voicegroup.js", "client");
  api.add_files("vex/src/modifier.js", "client");
  api.add_files("vex/src/modifiercontext.js", "client");  
  api.add_files("vex/src/accidental.js", "client");    
  api.add_files("vex/src/dot.js", "client");    
  api.add_files("vex/src/formatter.js", "client");
  api.add_files("vex/src/stavetie.js", "client");      
  api.add_files("vex/src/tabtie.js", "client");
  api.add_files("vex/src/tabslide.js", "client");
  api.add_files("vex/src/bend.js", "client");   
  api.add_files("vex/src/vibrato.js", "client");    
  api.add_files("vex/src/annotation.js", "client");
  api.add_files("vex/src/articulation.js", "client");  
  api.add_files("vex/src/tuning.js", "client");
  api.add_files("vex/src/stavemodifier.js", "client");
  api.add_files("vex/src/keysignature.js", "client");
  api.add_files("vex/src/timesignature.js", "client");  
  api.add_files("vex/src/clef.js", "client");
  api.add_files("vex/src/music.js", "client");
  api.add_files("vex/src/keymanager.js", "client");
  api.add_files("vex/src/renderer.js", "client");
  api.add_files("vex/src/raphaelcontext.js", "client");
  api.add_files("vex/src/stavebarline.js", "client");
  api.add_files("vex/src/stavehairpin.js", "client");
  api.add_files("vex/src/stavevolta.js", "client");
  api.add_files("vex/src/staverepetition.js", "client");  
  api.add_files("vex/src/stavesection.js", "client")    ;
  api.add_files("vex/src/stavetempo.js", "client");
  api.add_files("vex/src/barnote.js", "client");
  api.add_files("vex/src/tremolo.js", "client");
  api.add_files("vex/src/tuplet.js", "client");
  api.add_files("vex/src/boundingbox.js", "client");
  api.add_files("vex/src/textnote.js", "client");
  api.add_files("vex/src/frethandfinger.js", "client");
  api.add_files("vex/src/stringnumber.js", "client");
  api.add_files("vex/src/strokes.js", "client");

  api.export("Vex");

});
