{ pkgs, ... }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
  ];
  extensions = [
    "svelte.svelte-vscode"
    "vue.volar"
    "dbaeumer.vscode-eslint"
  ];
  preBuild = {
    commands = [
      "npm install"
    ];
  };
  previews = [
    {
      name = "web";
      command = "npm run dev -- --port $PORT --host 0.0.0.0";
      manager = "web";
    }
  ];
}
