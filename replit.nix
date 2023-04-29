{ pkgs, legacyPolygott }: {
	deps = [
		pkgs.ruby
		pkgs.solargraph
		pkgs.rufo
	] ++ legacyPolygott;
}