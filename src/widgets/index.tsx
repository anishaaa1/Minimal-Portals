import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

async function onActivate(plugin: ReactRNPlugin) {
  // On Hover
  await plugin.settings.registerStringSetting({
    id: "hover",
    title: "Border Color | On Hover (hex)",
    description: "Provide a hex color for when you hover over the portal.",
    defaultValue: "#6786fe",
  });

  plugin.track(async (reactivePlugin) => {
    const hover = await reactivePlugin.settings.getSetting("hover");
    await reactivePlugin.app.registerCSS(
      "hover",
      `#hierarchy-editor .portal-tree-node-box:hover { border-color: ${hover}; }`
    );
  });

  // When Focused
  await plugin.settings.registerStringSetting({
    id: "focused",
    title: "Border Color | When Focused (hex)",
    description: "Provide a hex color for when the portal is focused.",
    defaultValue: "#ffb146",
  });

  plugin.track(async (reactivePlugin) => {
    const focused = await reactivePlugin.settings.getSetting("focused");
    await reactivePlugin.app.registerCSS(
      "focused",
      `#hierarchy-editor .portal-tree-node-box--focused, #hierarchy-editor .portal-tree-node-box--focused:hover { border-color: ${focused}; }`
    );
  });

  // When Selected
  await plugin.settings.registerStringSetting({
    id: "selected",
    title: "Border Color | When Selected (hex)",
    description: "Provide a hex color for when the portal is selected.",
    defaultValue: "#7b4fd6",
  });

  plugin.track(async (reactivePlugin) => {
    const selected = await reactivePlugin.settings.getSetting("selected");
    await reactivePlugin.app.registerCSS(
      "selected",
      `#hierarchy-editor .portal-tree-node-box--selected, #hierarchy-editor .portal-tree-node-box--selected:hover { border-color: ${selected}; }`
    );
  });

  // Color of Left Border when Card Item
  await plugin.settings.registerStringSetting({
    id: "carditemleft",
    title: "Card Item | Left Border Color (hex)",
    description: "Provide a hex color for when the portal is a card item.",
    defaultValue: "#000000",
  });

  plugin.track(async (reactivePlugin) => {
    const carditemleft = await reactivePlugin.settings.getSetting("carditemleft");
    await reactivePlugin.app.registerCSS(
      "carditemleft",
      `#hierarchy-editor .portal-tree-node-box--card-item:before { border-left-color: ${carditemleft}; }`
    );
  });

  // Color of Right Border when Card Item
  await plugin.settings.registerStringSetting({
    id: "carditemright",
    title: "Card Item | Right Border Color (hex)",
    description: "Provide a hex color for when the portal is a card item.",
    defaultValue: "#6515dd",
  });

  plugin.track(async (reactivePlugin) => {
    const carditemright = await reactivePlugin.settings.getSetting("carditemright");
    await reactivePlugin.app.registerCSS(
      "carditemright",
      `#hierarchy-editor .portal-tree-node-box--card-item:before { border-right-color: ${carditemright}px; }`
    );
  });

  // Width of Left Border when Card Item
  await plugin.settings.registerStringSetting({
    id: "carditemleftwidth",
    title: "Card Item | Left Border Width (px)",
    description: "Set a value for thickness of the left border of a portal when it's a card item. (Note: Set to 0 if you do not want this border.)",
    defaultValue: "1.5",
  });

  plugin.track(async (reactivePlugin) => {
    const carditemleftwidth = await reactivePlugin.settings.getSetting("carditemleftwidth");
    await reactivePlugin.app.registerCSS(
      "carditemleftwidth",
      `#hierarchy-editor .portal-tree-node-box--card-item:before { border-left-width: ${carditemleftwidth}px; }`
    );
  });

  // Width of Right Border when Card Item
  await plugin.settings.registerStringSetting({
    id: "carditemrightwidth",
    title: "Card Item | Right Border Width (px)",
    description: "Set a value for thickness of the right border of a portal when it's a card item. (Note: Set to 0 if you do not want this border.)",
    defaultValue: "1.5",
  });

  plugin.track(async (reactivePlugin) => {
    const carditemrightwidth = await reactivePlugin.settings.getSetting("carditemrightwidth");
    await reactivePlugin.app.registerCSS(
      "carditemrightwidth",
      `#hierarchy-editor .portal-tree-node-box--card-item:before { border-right-width: ${carditemrightwidth}px; }`
    );
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
