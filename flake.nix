{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    nix-filter.url = "github:numtide/nix-filter";
  };

  outputs = {
    nixpkgs,
    flake-utils,
    nix-filter,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;

        overlays = [
          (import ./nix/elixir_overlay.nix)
          (import ./nix/node_overlay.nix)
        ];
      };

      devShell = pkgs.callPackage ./nix/dev.nix {};
    in {
      devShells.default = devShell;
      formatter = pkgs.alejandra;
    });
}
