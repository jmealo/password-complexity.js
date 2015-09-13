var PasswordComplexity = {
    
    isCommon: function isCommon(str) {
        return PasswordComplexity.howCommon(str) !== -1;
    },

    howCommon: function howCommon(str) {
        var char,
        topology = '';

        for (var x = 0, len = str.length; x < len; x++) {
            char = str.charAt(x);
            if (/[A-Z]/.test(char)) {
                topology += 'u';
            } else if (/[a-z]/.test(char)) {
                topology += 'l';
            } else if (/[0-9]/.test(char)) {
                topology += 'd';
            } else {
                topology += 's';
            }
        }

        return PasswordComplexity.topologies.indexOf(topology);
    },

    topologies: ["ullllldd", "ulllllldd", "ullldddd", "llllllld", "ullllllldd", "ulllllld", "ullllldddd", "ulllldddd", "lllllldd", "ullllllld", "ullllddd", "ulldddds", "llllllll", "ulllllddd", "llllllldd", "llsddlddl", "lllllllld", "ullllldds", "ulllllldddd", "ulllllllldd", "ulllllds", "ulllllllld", "ullllldddds", "lllllllll", "lllllllldd", "ullllllddd", "lllllddd", "ullldddds", "ullllllldddd", "ulllllsdd", "uuuuuudl", "lllldddd", "ddulllllll", "ullsdddd", "ulllldds", "ullllllds", "ddullllll", "llllsddd", "llllllllld", "llllldddd", "llllllllll", "llllllddd", "ullllllllldd", "ullllllllld", "ddddddul", "ulllllllddd", "ulllllldds", "uuuuuuds", "uudllldddu", "ullllsdd", "ulllllsd", "lllsdddd", "lllllldddd", "ullllllldds", "ddulllll", "ulllllllds", "ullllddds", "ulllldddds", "ulllsdddd", "ullllsddd", "ulllllldddds", "ulllddds", "llllsdddd", "llllllsdd", "lllllldds", "ddddulll", "dddddddd", "ullllllsd", "uldddddd", "llllllsd", "udllllllld", "lllllllllll", "lllllllllld", "llllldds", "llllddds", "ulllllllldddd", "uuuuuuuu", "ulllsddd", "ullllllsdd", "ulllllddds", "lllllsdd", "ullllsdddd", "ulllddddd", "ulldddddd", "ullddddd", "llllllllldd", "llllllldds", "lllllllddd", "llllllds", "llldddds", "uuullldddd", "ulllllsddd", "ulllllllsd", "llllllllsd", "llllllldddd", "ulllllsdddd", "lllllllds", "lllldddds", "ddddullll", "uudllldddd"]
};

