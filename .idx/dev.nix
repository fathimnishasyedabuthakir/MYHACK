{ pkgs, ... }: {
	# Which nixpkgs channel to use.
	channel = "stable-23.11"; # or "unstable"
	# Use https://search.nixos.org/packages to find packages
	packages = [
		pkgs.nodejs_20
	];
	# Sets environment variables in the workspace
	env = {};
	idx = {
		# Search for the extensions you want on https://open-vsx.org/
		# and add them to the list below.
		extensions = [
			"vscodevim.vim"
		];
		# Enable previews
		previews = {
			enable = true;
		};
	};
}
