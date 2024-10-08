final: prev: let
  beamPackages = prev.beam_minimal.packagesWith prev.beam_minimal.interpreters.erlang_27;
  elixir = beamPackages.elixir_1_17;
  inherit (beamPackages) erlang;
in {
  inherit elixir erlang;

  beamPackages = beamPackages.extend (final: prev: {
    inherit elixir;
  });
}
