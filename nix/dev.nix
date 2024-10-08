{
  lib,
  mkShell,
  stdenv,
  beamPackages,
  glibcLocales,
  nodejs,
  yarn,
  inotify-tools,
  darwin,
}:
mkShell {
  packages =
    [
      beamPackages.elixir
      beamPackages.hex
      beamPackages.rebar3
      glibcLocales
      nodejs
      yarn
    ]
    ++ lib.optionals stdenv.isLinux [
      inotify-tools
    ]
    ++ lib.optionals stdenv.isDarwin [
      darwin.apple_sdk.frameworks.CoreFoundation
      darwin.apple_sdk.frameworks.CoreServices
    ];

  shellHook = ''
    export LANG=en_US.UTF-8
    export ERL_AFLAGS="-kernel shell_history enabled"
  '';
}
