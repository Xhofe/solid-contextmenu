import { Component, createSignal, For } from "solid-js";
import { Menu, useContextMenu, Item, Separator, animation } from ".";

const App: Component = () => {
  const [_animation, setAnimation] = createSignal(animation.scale);

  const { show } = useContextMenu({ id: "1", props: "lala" });
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "center",
        gap: "0.5rem",
      }}
      onContextMenu={(e) => {
        show(e, { props: 1 });
      }}
    >
      <h4>right click</h4>
      <select
        onChange={(e) => {
          setAnimation(e.currentTarget.value);
        }}
      >
        <For
          each={[
            animation.scale,
            animation.fade,
            animation.flip,
            animation.slide,
          ]}
        >
          {(item) => {
            return <option value={item}>{item}</option>;
          }}
        </For>
      </select>
      <Menu id="1" animation={_animation()} theme="light">
        <Item>⚡ Beautiful</Item>
        <Item>😊 Easy use</Item>
        <Item>💕 Built with heart</Item>
        <Separator />
        <Item disabled>❌ Disabled</Item>
      </Menu>
    </div>
  );
};

export default App;
