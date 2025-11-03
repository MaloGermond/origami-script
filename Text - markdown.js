//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: 254DD94A-5307-478B-8014-3CA100D4F3A3
//==============================================================================

String.prototype.removeCharactersAt = function (index, num) {
  return this.substring(0, index) + this.substring(index + num);
};

function markdownParser(text, h1, h2, h3, emphasis, bold, deletions) {
  // globals:
  var attrs = new Array();
  var newText = text;

  // definitions:

  const MDAttributes = {
    H1: 1,
    H2: 2,
    H3: 3,
    BOLD: 4,
    EMPHASIS: 5,
    DELETE: 6,
  };

  function MDDefs(regexp, firstSize, secondSize) {
    this.regexp = regexp;
    this.firstSize = firstSize;
    this.secondSize = secondSize;
  }

  function Attribute(type, location, length) {
    this.type = type;
    this.location = location;
    this.length = length;
  }

  // utils:

  function pushAtribute(attr, size) {
    // Update all other attributes if needed.
    // this is going to be pretty slow for a large number of ranges.
    attrs = attrs.map((obj) => {
      if (obj.location > attr.location) {
        return new Attribute(obj.type, obj.location - size, obj.length);
      }
      return obj;
    });
    attrs.push(attr);
  }

  function parseAttribute(attribType, md) {
    // const md = MarkDownMap.get(attribType);
    const regexp = md.regexp;
    const firstSize = md.firstSize;
    const secondSize = md.secondSize;
    while ((results = regexp.exec(newText)) !== null) {
      const attribute = new Attribute(
        attribType,
        results.index,
        regexp.lastIndex - (results.index + firstSize + secondSize),
      );
      pushAtribute(attribute, firstSize + secondSize);
      newText = newText.removeCharactersAt(results.index, firstSize);
      newText = newText.removeCharactersAt(
        regexp.lastIndex - (firstSize + secondSize),
        secondSize,
      );
    }
  }

  // Body:

  // Here the order matters, we need to process first H3, then H2 and lastly H1
  parseAttribute(
    MDAttributes.H3,
    new MDDefs(new RegExp(/^### (.*$)/gim), 4, 0),
  );
  parseAttribute(MDAttributes.H2, new MDDefs(new RegExp(/^## (.*$)/gim), 3, 0));
  parseAttribute(MDAttributes.H1, new MDDefs(new RegExp(/^# (.*$)/gim), 2, 0));

  // In the same vein, we need to process bold before emphasis
  parseAttribute(
    MDAttributes.BOLD,
    new MDDefs(new RegExp(/(\*\*|__)(.*?)\1/gim, "g"), 2, 2),
  );
  parseAttribute(
    MDAttributes.EMPHASIS,
    new MDDefs(new RegExp(/(\*|_)(.*?)\1/gim, "g"), 1, 1),
  );
  parseAttribute(
    MDAttributes.DELETE,
    new MDDefs(new RegExp(/\~\~(.*?)\~\~/gim, "g"), 2, 2),
  );

  // Convert into Origami Text Attributes Format
  const converted = attrs.map((obj) => {
    var newAttr;
    if (MDAttributes.BOLD === obj.type) {
      newAttr = { ...bold };
    } else if (MDAttributes.EMPHASIS === obj.type) {
      newAttr = { ...emphasis };
    } else if (MDAttributes.DELETE === obj.type) {
      newAttr = { ...deletions };
    } else if (MDAttributes.H1 === obj.type) {
      newAttr = { ...h1 };
    } else if (MDAttributes.H2 === obj.type) {
      newAttr = { ...h2 };
    } else {
      newAttr = { ...h3 };
    }

    newAttr["range"] = { location: obj.location, length: obj.length };
    return newAttr;
  });

  return { text: newText, attributes: converted };
}

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Markdown", types.STRING),
  new PatchInput("H1", types.JSON),
  new PatchInput("H2", types.JSON),
  new PatchInput("H3", types.JSON),
  new PatchInput("Emphasis", types.JSON),
  new PatchInput("Bold", types.JSON),
  new PatchInput("Deletions", types.JSON),
];

patch.outputs = [
  new PatchOutput("Text", types.STRING),
  new PatchOutput("Attributes", types.JSON),
];

// Add your logic in this function.
patch.evaluate = function () {
  const result = markdownParser(
    patch.inputs[0].value,
    patch.inputs[1].value,
    patch.inputs[2].value,
    patch.inputs[3].value,
    patch.inputs[4].value,
    patch.inputs[5].value,
    patch.inputs[6].value,
  );

  patch.outputs[0].value = result.text;
  patch.outputs[1].value = result.attributes;
};

return patch;
