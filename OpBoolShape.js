// Script ID: 15F811D6-5A16-4E45-A3FE-DA338E94F1C2

const global = {};

const navigator = {
    userAgent: 'mac',
};

(() => { var ti = (ei => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(ei, { get: (Bi, qi) => (typeof require < "u" ? require : Bi)[qi] }) : ei)(function(ei) { if(typeof require < "u") return require.apply(this, arguments); throw Error('Dynamic require of "' + ei + '" is not supported') });
    (() => { var ei = Object.create,
            Bi = Object.defineProperty,
            qi = Object.getOwnPropertyDescriptor,
            tr = Object.getOwnPropertyNames,
            _r = Object.getPrototypeOf,
            vr = Object.prototype.hasOwnProperty,
            mr = (Nt => typeof ti < "u" ? ti : typeof Proxy < "u" ? new Proxy(Nt, { get: (Mt, Et) => (typeof ti < "u" ? ti : Mt)[Et] }) : Nt)(function(Nt) { if(typeof ti < "u") return ti.apply(this, arguments); throw Error('Dynamic require of "' + Nt + '" is not supported') }),
            _i = (Nt, Mt) => function() { return Mt || (0, Nt[tr(Nt)[0]])((Mt = { exports: {} })
                    .exports, Mt), Mt.exports },
            yr = (Nt, Mt, Et, Ht) => { if(Mt && typeof Mt == "object" || typeof Mt == "function")
                    for(let tt of tr(Mt)) !vr.call(Nt, tt) && tt !== Et && Bi(Nt, tt, { get: () => Mt[tt], enumerable: !(Ht = qi(Mt, tt)) || Ht.enumerable }); return Nt },
            Cr = (Nt, Mt, Et) => (Et = Nt != null ? ei(_r(Nt)) : {}, yr(Mt || !Nt || !Nt.__esModule ? Bi(Et, "default", { value: Nt, enumerable: !0 }) : Et, Nt)),
            wr = _i({ "(disabled):node_modules/paper/dist/node/self.js"() {} }),
            xr = _i({ "node_modules/acorn/dist/acorn.js"(Nt, Mt) {
                    (function(Et, Ht) { typeof Nt == "object" && typeof Mt < "u" ? Ht(Nt) : typeof define == "function" && define.amd ? define(["exports"], Ht) : (Et = typeof globalThis < "u" ? globalThis : Et || self, Ht(Et.acorn = {})) })(Nt, function(Et) { "use strict"; var Ht = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239],
                            tt = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191],
                            Ot = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65",
                            kt = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
                            M = { 3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile", 5: "class enum extends super const export import", 6: "enum", strict: "implements interface let package private protected public static yield", strictBind: "eval arguments" },
                            Le = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
                            ve = { 5: Le, "5module": Le + " export import", 6: Le + " const class extends export import super" },
                            ii = /^in(stanceof)?$/,
                            ri = new RegExp("[" + kt + "]"),
                            me = new RegExp("[" + kt + Ot + "]");

                        function Ft(i, a) { for(var m = 65536, E = 0; E < a.length; E += 2) { if(m += a[E], m > i) return !1; if(m += a[E + 1], m >= i) return !0 } return !1 }

                        function de(i, a) { return i < 65 ? i === 36 : i < 91 ? !0 : i < 97 ? i === 95 : i < 123 ? !0 : i <= 65535 ? i >= 170 && ri.test(String.fromCharCode(i)) : a === !1 ? !1 : Ft(i, tt) }

                        function q(i, a) { return i < 48 ? i === 36 : i < 58 ? !0 : i < 65 ? !1 : i < 91 ? !0 : i < 97 ? i === 95 : i < 123 ? !0 : i <= 65535 ? i >= 170 && me.test(String.fromCharCode(i)) : a === !1 ? !1 : Ft(i, tt) || Ft(i, Ht) } var xt = function(a, m) { m === void 0 && (m = {}), this.label = a, this.keyword = m.keyword, this.beforeExpr = !!m.beforeExpr, this.startsExpr = !!m.startsExpr, this.isLoop = !!m.isLoop, this.isAssign = !!m.isAssign, this.prefix = !!m.prefix, this.postfix = !!m.postfix, this.binop = m.binop || null, this.updateContext = null };

                        function ot(i, a) { return new xt(i, { beforeExpr: !0, binop: a }) } var ee = { beforeExpr: !0 },
                            ht = { startsExpr: !0 },
                            ni = {};

                        function lt(i, a) { return a === void 0 && (a = {}), a.keyword = i, ni[i] = new xt(i, a) } var k = { num: new xt("num", ht), regexp: new xt("regexp", ht), string: new xt("string", ht), name: new xt("name", ht), privateId: new xt("privateId", ht), eof: new xt("eof"), bracketL: new xt("[", { beforeExpr: !0, startsExpr: !0 }), bracketR: new xt("]"), braceL: new xt("{", { beforeExpr: !0, startsExpr: !0 }), braceR: new xt("}"), parenL: new xt("(", { beforeExpr: !0, startsExpr: !0 }), parenR: new xt(")"), comma: new xt(",", ee), semi: new xt(";", ee), colon: new xt(":", ee), dot: new xt("."), question: new xt("?", ee), questionDot: new xt("?."), arrow: new xt("=>", ee), template: new xt("template"), invalidTemplate: new xt("invalidTemplate"), ellipsis: new xt("...", ee), backQuote: new xt("`", ht), dollarBraceL: new xt("${", { beforeExpr: !0, startsExpr: !0 }), eq: new xt("=", { beforeExpr: !0, isAssign: !0 }), assign: new xt("_=", { beforeExpr: !0, isAssign: !0 }), incDec: new xt("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }), prefix: new xt("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), logicalOR: ot("||", 1), logicalAND: ot("&&", 2), bitwiseOR: ot("|", 3), bitwiseXOR: ot("^", 4), bitwiseAND: ot("&", 5), equality: ot("==/!=/===/!==", 6), relational: ot("</>/<=/>=", 7), bitShift: ot("<</>>/>>>", 8), plusMin: new xt("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }), modulo: ot("%", 10), star: ot("*", 10), slash: ot("/", 10), starstar: new xt("**", { beforeExpr: !0 }), coalesce: ot("??", 1), _break: lt("break"), _case: lt("case", ee), _catch: lt("catch"), _continue: lt("continue"), _debugger: lt("debugger"), _default: lt("default", ee), _do: lt("do", { isLoop: !0, beforeExpr: !0 }), _else: lt("else", ee), _finally: lt("finally"), _for: lt("for", { isLoop: !0 }), _function: lt("function", ht), _if: lt("if"), _return: lt("return", ee), _switch: lt("switch"), _throw: lt("throw", ee), _try: lt("try"), _var: lt("var"), _const: lt("const"), _while: lt("while", { isLoop: !0 }), _with: lt("with"), _new: lt("new", { beforeExpr: !0, startsExpr: !0 }), _this: lt("this", ht), _super: lt("super", ht), _class: lt("class", ht), _extends: lt("extends", ee), _export: lt("export"), _import: lt("import", ht), _null: lt("null", ht), _true: lt("true", ht), _false: lt("false", ht), _in: lt("in", { beforeExpr: !0, binop: 7 }), _instanceof: lt("instanceof", { beforeExpr: !0, binop: 7 }), _typeof: lt("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), _void: lt("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), _delete: lt("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }) },
                            ie = /\r\n?|\n|\u2028|\u2029/,
                            Ct = new RegExp(ie.source, "g");

                        function ae(i) { return i === 10 || i === 13 || i === 8232 || i === 8233 }

                        function Oe(i, a, m) { m === void 0 && (m = i.length); for(var E = a; E < m; E++) { var P = i.charCodeAt(E); if(ae(P)) return E < m - 1 && P === 13 && i.charCodeAt(E + 1) === 10 ? E + 2 : E + 1 } return -1 } var ue = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                            re = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                            si = Object.prototype,
                            Se = si.hasOwnProperty,
                            xe = si.toString,
                            ct = Object.hasOwn || function(i, a) { return Se.call(i, a) },
                            ai = Array.isArray || function(i) { return xe.call(i) === "[object Array]" },
                            it = Object.create(null);

                        function $t(i) { return it[i] || (it[i] = new RegExp("^(?:" + i.replace(/ /g, "|") + ")$")) }

                        function ge(i) { return i <= 65535 ? String.fromCharCode(i) : (i -= 65536, String.fromCharCode((i >> 10) + 55296, (i & 1023) + 56320)) } var Bt = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
                            oe = function(a, m) { this.line = a, this.column = m };
                        oe.prototype.offset = function(a) { return new oe(this.line, this.column + a) }; var Ne = function(a, m, E) { this.start = m, this.end = E, a.sourceFile !== null && (this.source = a.sourceFile) };

                        function mi(i, a) { for(var m = 1, E = 0;;) { var P = Oe(i, E, a); if(P < 0) return new oe(m, a - E);++m, E = P } } var Ie = { ecmaVersion: null, sourceType: "script", onInsertedSemicolon: null, onTrailingComma: null, allowReserved: null, allowReturnOutsideFunction: !1, allowImportExportEverywhere: !1, allowAwaitOutsideFunction: null, allowSuperOutsideMethod: null, allowHashBang: !1, checkPrivateFields: !0, locations: !1, onToken: null, onComment: null, ranges: !1, program: null, sourceFile: null, directSourceFile: null, preserveParens: !1 },
                            Ii = !1;

                        function Yt(i) { var a = {}; for(var m in Ie) a[m] = i && ct(i, m) ? i[m] : Ie[m]; if(a.ecmaVersion === "latest" ? a.ecmaVersion = 1e8 : a.ecmaVersion == null ? (!Ii && typeof console == "object" && console.warn && (Ii = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), a.ecmaVersion = 11) : a.ecmaVersion >= 2015 && (a.ecmaVersion -= 2009), a.allowReserved == null && (a.allowReserved = a.ecmaVersion < 5), (!i || i.allowHashBang == null) && (a.allowHashBang = a.ecmaVersion >= 14), ai(a.onToken)) { var E = a.onToken;
                                a.onToken = function(P) { return E.push(P) } } return ai(a.onComment) && (a.onComment = ui(a, a.onComment)), a }

                        function ui(i, a) { return function(m, E, P, H, G, et) { var nt = { type: m ? "Block" : "Line", value: E, start: P, end: H };
                                i.locations && (nt.loc = new Ne(this, G, et)), i.ranges && (nt.range = [P, H]), a.push(nt) } } var Pe = 1,
                            Ee = 2,
                            Vt = 4,
                            Zt = 8,
                            Rt = 16,
                            Pi = 32,
                            Me = 64,
                            Di = 128,
                            Ve = 256,
                            yi = Pe | Ee | Ve;

                        function Ci(i, a) { return Ee | (i ? Vt : 0) | (a ? Zt : 0) } var oi = 0,
                            wi = 1,
                            we = 2,
                            Kt = 3,
                            hi = 4,
                            Ut = 5,
                            zt = function(a, m, E) { this.options = a = Yt(a), this.sourceFile = a.sourceFile, this.keywords = $t(ve[a.ecmaVersion >= 6 ? 6 : a.sourceType === "module" ? "5module" : 5]); var P = "";
                                a.allowReserved !== !0 && (P = M[a.ecmaVersion >= 6 ? 6 : a.ecmaVersion === 5 ? 5 : 3], a.sourceType === "module" && (P += " await")), this.reservedWords = $t(P); var H = (P ? P + " " : "") + M.strict;
                                this.reservedWordsStrict = $t(H), this.reservedWordsStrictBind = $t(H + " " + M.strictBind), this.input = String(m), this.containsEsc = !1, E ? (this.pos = E, this.lineStart = this.input.lastIndexOf(`
`, E - 1) + 1, this.curLine = this.input.slice(0, this.lineStart)
                                    .split(ie)
                                    .length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = k.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = a.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), this.pos === 0 && a.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(Pe), this.regexpState = null, this.privateNameStack = [] },
                            dt = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
                        zt.prototype.parse = function() { var a = this.options.program || this.startNode(); return this.nextToken(), this.parseTopLevel(a) }, dt.inFunction.get = function() { return (this.currentVarScope()
                                .flags & Ee) > 0 }, dt.inGenerator.get = function() { return (this.currentVarScope()
                                    .flags & Zt) > 0 && !this.currentVarScope()
                                .inClassFieldInit }, dt.inAsync.get = function() { return (this.currentVarScope()
                                    .flags & Vt) > 0 && !this.currentVarScope()
                                .inClassFieldInit }, dt.canAwait.get = function() { for(var i = this.scopeStack.length - 1; i >= 0; i--) { var a = this.scopeStack[i]; if(a.inClassFieldInit || a.flags & Ve) return !1; if(a.flags & Ee) return (a.flags & Vt) > 0 } return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction }, dt.allowSuper.get = function() { var i = this.currentThisScope(),
                                a = i.flags,
                                m = i.inClassFieldInit; return (a & Me) > 0 || m || this.options.allowSuperOutsideMethod }, dt.allowDirectSuper.get = function() { return (this.currentThisScope()
                                .flags & Di) > 0 }, dt.treatFunctionsAsVar.get = function() { return this.treatFunctionsAsVarInScope(this.currentScope()) }, dt.allowNewDotTarget.get = function() { var i = this.currentThisScope(),
                                a = i.flags,
                                m = i.inClassFieldInit; return (a & (Ee | Ve)) > 0 || m }, dt.inClassStaticBlock.get = function() { return (this.currentVarScope()
                                .flags & Ve) > 0 }, zt.extend = function() { for(var a = [], m = arguments.length; m--;) a[m] = arguments[m]; for(var E = this, P = 0; P < a.length; P++) E = a[P](E); return E }, zt.parse = function(a, m) { return new this(m, a)
                                .parse() }, zt.parseExpressionAt = function(a, m, E) { var P = new this(E, a, m); return P.nextToken(), P.parseExpression() }, zt.tokenizer = function(a, m) { return new this(m, a) }, Object.defineProperties(zt.prototype, dt); var t = zt.prototype,
                            e = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
                        t.strictDirective = function(i) { if(this.options.ecmaVersion < 5) return !1; for(;;) { re.lastIndex = i, i += re.exec(this.input)[0].length; var a = e.exec(this.input.slice(i)); if(!a) return !1; if((a[1] || a[2]) === "use strict") { re.lastIndex = i + a[0].length; var m = re.exec(this.input),
                                        E = m.index + m[0].length,
                                        P = this.input.charAt(E); return P === ";" || P === "}" || ie.test(m[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(P) || P === "!" && this.input.charAt(E + 1) === "=") } i += a[0].length, re.lastIndex = i, i += re.exec(this.input)[0].length, this.input[i] === ";" && i++ } }, t.eat = function(i) { return this.type === i ? (this.next(), !0) : !1 }, t.isContextual = function(i) { return this.type === k.name && this.value === i && !this.containsEsc }, t.eatContextual = function(i) { return this.isContextual(i) ? (this.next(), !0) : !1 }, t.expectContextual = function(i) { this.eatContextual(i) || this.unexpected() }, t.canInsertSemicolon = function() { return this.type === k.eof || this.type === k.braceR || ie.test(this.input.slice(this.lastTokEnd, this.start)) }, t.insertSemicolon = function() { if(this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0 }, t.semicolon = function() {!this.eat(k.semi) && !this.insertSemicolon() && this.unexpected() }, t.afterTrailingComma = function(i, a) { if(this.type === i) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), a || this.next(), !0 }, t.expect = function(i) { this.eat(i) || this.unexpected() }, t.unexpected = function(i) { this.raise(i ? ? this.start, "Unexpected token") }; var r = function() { this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1 };
                        t.checkPatternErrors = function(i, a) { if(i) { i.trailingComma > -1 && this.raiseRecoverable(i.trailingComma, "Comma is not permitted after the rest element"); var m = a ? i.parenthesizedAssign : i.parenthesizedBind;
                                m > -1 && this.raiseRecoverable(m, a ? "Assigning to rvalue" : "Parenthesized pattern") } }, t.checkExpressionErrors = function(i, a) { if(!i) return !1; var m = i.shorthandAssign,
                                E = i.doubleProto; if(!a) return m >= 0 || E >= 0;
                            m >= 0 && this.raise(m, "Shorthand property assignments are valid only in destructuring patterns"), E >= 0 && this.raiseRecoverable(E, "Redefinition of __proto__ property") }, t.checkYieldAwaitInDefaultParams = function() { this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value") }, t.isSimpleAssignTarget = function(i) { return i.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(i.expression) : i.type === "Identifier" || i.type === "MemberExpression" }; var n = zt.prototype;
                        n.parseTopLevel = function(i) { var a = Object.create(null); for(i.body || (i.body = []); this.type !== k.eof;) { var m = this.parseStatement(null, !0, a);
                                i.body.push(m) } if(this.inModule)
                                for(var E = 0, P = Object.keys(this.undefinedExports); E < P.length; E += 1) { var H = P[E];
                                    this.raiseRecoverable(this.undefinedExports[H].start, "Export '" + H + "' is not defined") }
                            return this.adaptDirectivePrologue(i.body), this.next(), i.sourceType = this.options.sourceType, this.finishNode(i, "Program") }; var s = { kind: "loop" },
                            u = { kind: "switch" };
                        n.isLet = function(i) { if(this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
                            re.lastIndex = this.pos; var a = re.exec(this.input),
                                m = this.pos + a[0].length,
                                E = this.input.charCodeAt(m); if(E === 91 || E === 92) return !0; if(i) return !1; if(E === 123 || E > 55295 && E < 56320) return !0; if(de(E, !0)) { for(var P = m + 1; q(E = this.input.charCodeAt(P), !0);) ++P; if(E === 92 || E > 55295 && E < 56320) return !0; var H = this.input.slice(m, P); if(!ii.test(H)) return !0 } return !1 }, n.isAsyncFunction = function() { if(this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
                            re.lastIndex = this.pos; var i = re.exec(this.input),
                                a = this.pos + i[0].length,
                                m; return !ie.test(this.input.slice(this.pos, a)) && this.input.slice(a, a + 8) === "function" && (a + 8 === this.input.length || !(q(m = this.input.charCodeAt(a + 8)) || m > 55295 && m < 56320)) }, n.parseStatement = function(i, a, m) { var E = this.type,
                                P = this.startNode(),
                                H; switch (this.isLet(i) && (E = k._var, H = "let"), E) {
                                case k._break:
                                case k._continue:
                                    return this.parseBreakContinueStatement(P, E.keyword);
                                case k._debugger:
                                    return this.parseDebuggerStatement(P);
                                case k._do:
                                    return this.parseDoStatement(P);
                                case k._for:
                                    return this.parseForStatement(P);
                                case k._function:
                                    return i && (this.strict || i !== "if" && i !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(P, !1, !i);
                                case k._class:
                                    return i && this.unexpected(), this.parseClass(P, !0);
                                case k._if:
                                    return this.parseIfStatement(P);
                                case k._return:
                                    return this.parseReturnStatement(P);
                                case k._switch:
                                    return this.parseSwitchStatement(P);
                                case k._throw:
                                    return this.parseThrowStatement(P);
                                case k._try:
                                    return this.parseTryStatement(P);
                                case k._const:
                                case k._var:
                                    return H = H || this.value, i && H !== "var" && this.unexpected(), this.parseVarStatement(P, H);
                                case k._while:
                                    return this.parseWhileStatement(P);
                                case k._with:
                                    return this.parseWithStatement(P);
                                case k.braceL:
                                    return this.parseBlock(!0, P);
                                case k.semi:
                                    return this.parseEmptyStatement(P);
                                case k._export:
                                case k._import:
                                    if(this.options.ecmaVersion > 10 && E === k._import) { re.lastIndex = this.pos; var G = re.exec(this.input),
                                            et = this.pos + G[0].length,
                                            nt = this.input.charCodeAt(et); if(nt === 40 || nt === 46) return this.parseExpressionStatement(P, this.parseExpression()) } return this.options.allowImportExportEverywhere || (a || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), E === k._import ? this.parseImport(P) : this.parseExport(P, m);
                                default:
                                    if(this.isAsyncFunction()) return i && this.unexpected(), this.next(), this.parseFunctionStatement(P, !0, !i); var vt = this.value,
                                        St = this.parseExpression(); return E === k.name && St.type === "Identifier" && this.eat(k.colon) ? this.parseLabeledStatement(P, vt, St, i) : this.parseExpressionStatement(P, St) } }, n.parseBreakContinueStatement = function(i, a) { var m = a === "break";
                            this.next(), this.eat(k.semi) || this.insertSemicolon() ? i.label = null : this.type !== k.name ? this.unexpected() : (i.label = this.parseIdent(), this.semicolon()); for(var E = 0; E < this.labels.length; ++E) { var P = this.labels[E]; if((i.label == null || P.name === i.label.name) && (P.kind != null && (m || P.kind === "loop") || i.label && m)) break } return E === this.labels.length && this.raise(i.start, "Unsyntactic " + a), this.finishNode(i, m ? "BreakStatement" : "ContinueStatement") }, n.parseDebuggerStatement = function(i) { return this.next(), this.semicolon(), this.finishNode(i, "DebuggerStatement") }, n.parseDoStatement = function(i) { return this.next(), this.labels.push(s), i.body = this.parseStatement("do"), this.labels.pop(), this.expect(k._while), i.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(k.semi) : this.semicolon(), this.finishNode(i, "DoWhileStatement") }, n.parseForStatement = function(i) { this.next(); var a = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1; if(this.labels.push(s), this.enterScope(0), this.expect(k.parenL), this.type === k.semi) return a > -1 && this.unexpected(a), this.parseFor(i, null); var m = this.isLet(); if(this.type === k._var || this.type === k._const || m) { var E = this.startNode(),
                                    P = m ? "let" : this.value; return this.next(), this.parseVar(E, !0, P), this.finishNode(E, "VariableDeclaration"), (this.type === k._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && E.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === k._in ? a > -1 && this.unexpected(a) : i.await = a > -1), this.parseForIn(i, E)) : (a > -1 && this.unexpected(a), this.parseFor(i, E)) } var H = this.isContextual("let"),
                                G = !1,
                                et = new r,
                                nt = this.parseExpression(a > -1 ? "await" : !0, et); return this.type === k._in || (G = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (this.options.ecmaVersion >= 9 && (this.type === k._in ? a > -1 && this.unexpected(a) : i.await = a > -1), H && G && this.raise(nt.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(nt, !1, et), this.checkLValPattern(nt), this.parseForIn(i, nt)) : (this.checkExpressionErrors(et, !0), a > -1 && this.unexpected(a), this.parseFor(i, nt)) }, n.parseFunctionStatement = function(i, a, m) { return this.next(), this.parseFunction(i, o | (m ? 0 : l), !1, a) }, n.parseIfStatement = function(i) { return this.next(), i.test = this.parseParenExpression(), i.consequent = this.parseStatement("if"), i.alternate = this.eat(k._else) ? this.parseStatement("if") : null, this.finishNode(i, "IfStatement") }, n.parseReturnStatement = function(i) { return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(k.semi) || this.insertSemicolon() ? i.argument = null : (i.argument = this.parseExpression(), this.semicolon()), this.finishNode(i, "ReturnStatement") }, n.parseSwitchStatement = function(i) { this.next(), i.discriminant = this.parseParenExpression(), i.cases = [], this.expect(k.braceL), this.labels.push(u), this.enterScope(0); for(var a, m = !1; this.type !== k.braceR;)
                                if(this.type === k._case || this.type === k._default) { var E = this.type === k._case;
                                    a && this.finishNode(a, "SwitchCase"), i.cases.push(a = this.startNode()), a.consequent = [], this.next(), E ? a.test = this.parseExpression() : (m && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), m = !0, a.test = null), this.expect(k.colon) } else a || this.unexpected(), a.consequent.push(this.parseStatement(null)); return this.exitScope(), a && this.finishNode(a, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(i, "SwitchStatement") }, n.parseThrowStatement = function(i) { return this.next(), ie.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), i.argument = this.parseExpression(), this.semicolon(), this.finishNode(i, "ThrowStatement") }; var h = [];
                        n.parseCatchClauseParam = function() { var i = this.parseBindingAtom(),
                                a = i.type === "Identifier"; return this.enterScope(a ? Pi : 0), this.checkLValPattern(i, a ? hi : we), this.expect(k.parenR), i }, n.parseTryStatement = function(i) { if(this.next(), i.block = this.parseBlock(), i.handler = null, this.type === k._catch) { var a = this.startNode();
                                this.next(), this.eat(k.parenL) ? a.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), a.param = null, this.enterScope(0)), a.body = this.parseBlock(!1), this.exitScope(), i.handler = this.finishNode(a, "CatchClause") } return i.finalizer = this.eat(k._finally) ? this.parseBlock() : null, !i.handler && !i.finalizer && this.raise(i.start, "Missing catch or finally clause"), this.finishNode(i, "TryStatement") }, n.parseVarStatement = function(i, a, m) { return this.next(), this.parseVar(i, !1, a, m), this.semicolon(), this.finishNode(i, "VariableDeclaration") }, n.parseWhileStatement = function(i) { return this.next(), i.test = this.parseParenExpression(), this.labels.push(s), i.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(i, "WhileStatement") }, n.parseWithStatement = function(i) { return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), i.object = this.parseParenExpression(), i.body = this.parseStatement("with"), this.finishNode(i, "WithStatement") }, n.parseEmptyStatement = function(i) { return this.next(), this.finishNode(i, "EmptyStatement") }, n.parseLabeledStatement = function(i, a, m, E) { for(var P = 0, H = this.labels; P < H.length; P += 1) { var G = H[P];
                                G.name === a && this.raise(m.start, "Label '" + a + "' is already declared") } for(var et = this.type.isLoop ? "loop" : this.type === k._switch ? "switch" : null, nt = this.labels.length - 1; nt >= 0; nt--) { var vt = this.labels[nt]; if(vt.statementStart === i.start) vt.statementStart = this.start, vt.kind = et;
                                else break } return this.labels.push({ name: a, kind: et, statementStart: this.start }), i.body = this.parseStatement(E ? E.indexOf("label") === -1 ? E + "label" : E : "label"), this.labels.pop(), i.label = m, this.finishNode(i, "LabeledStatement") }, n.parseExpressionStatement = function(i, a) { return i.expression = a, this.semicolon(), this.finishNode(i, "ExpressionStatement") }, n.parseBlock = function(i, a, m) { for(i === void 0 && (i = !0), a === void 0 && (a = this.startNode()), a.body = [], this.expect(k.braceL), i && this.enterScope(0); this.type !== k.braceR;) { var E = this.parseStatement(null);
                                a.body.push(E) } return m && (this.strict = !1), this.next(), i && this.exitScope(), this.finishNode(a, "BlockStatement") }, n.parseFor = function(i, a) { return i.init = a, this.expect(k.semi), i.test = this.type === k.semi ? null : this.parseExpression(), this.expect(k.semi), i.update = this.type === k.parenR ? null : this.parseExpression(), this.expect(k.parenR), i.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(i, "ForStatement") }, n.parseForIn = function(i, a) { var m = this.type === k._in; return this.next(), a.type === "VariableDeclaration" && a.declarations[0].init != null && (!m || this.options.ecmaVersion < 8 || this.strict || a.kind !== "var" || a.declarations[0].id.type !== "Identifier") && this.raise(a.start, (m ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), i.left = a, i.right = m ? this.parseExpression() : this.parseMaybeAssign(), this.expect(k.parenR), i.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(i, m ? "ForInStatement" : "ForOfStatement") }, n.parseVar = function(i, a, m, E) { for(i.declarations = [], i.kind = m;;) { var P = this.startNode(); if(this.parseVarId(P, m), this.eat(k.eq) ? P.init = this.parseMaybeAssign(a) : !E && m === "const" && !(this.type === k._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !E && P.id.type !== "Identifier" && !(a && (this.type === k._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : P.init = null, i.declarations.push(this.finishNode(P, "VariableDeclarator")), !this.eat(k.comma)) break } return i }, n.parseVarId = function(i, a) { i.id = this.parseBindingAtom(), this.checkLValPattern(i.id, a === "var" ? wi : we, !1) }; var o = 1,
                            l = 2,
                            f = 4;
                        n.parseFunction = function(i, a, m, E, P) { this.initFunction(i), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !E) && (this.type === k.star && a & l && this.unexpected(), i.generator = this.eat(k.star)), this.options.ecmaVersion >= 8 && (i.async = !!E), a & o && (i.id = a & f && this.type !== k.name ? null : this.parseIdent(), i.id && !(a & l) && this.checkLValSimple(i.id, this.strict || i.generator || i.async ? this.treatFunctionsAsVar ? wi : we : Kt)); var H = this.yieldPos,
                                G = this.awaitPos,
                                et = this.awaitIdentPos; return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ci(i.async, i.generator)), a & o || (i.id = this.type === k.name ? this.parseIdent() : null), this.parseFunctionParams(i), this.parseFunctionBody(i, m, !1, P), this.yieldPos = H, this.awaitPos = G, this.awaitIdentPos = et, this.finishNode(i, a & o ? "FunctionDeclaration" : "FunctionExpression") }, n.parseFunctionParams = function(i) { this.expect(k.parenL), i.params = this.parseBindingList(k.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams() }, n.parseClass = function(i, a) { this.next(); var m = this.strict;
                            this.strict = !0, this.parseClassId(i, a), this.parseClassSuper(i); var E = this.enterClassBody(),
                                P = this.startNode(),
                                H = !1; for(P.body = [], this.expect(k.braceL); this.type !== k.braceR;) { var G = this.parseClassElement(i.superClass !== null);
                                G && (P.body.push(G), G.type === "MethodDefinition" && G.kind === "constructor" ? (H && this.raiseRecoverable(G.start, "Duplicate constructor in the same class"), H = !0) : G.key && G.key.type === "PrivateIdentifier" && g(E, G) && this.raiseRecoverable(G.key.start, "Identifier '#" + G.key.name + "' has already been declared")) } return this.strict = m, this.next(), i.body = this.finishNode(P, "ClassBody"), this.exitClassBody(), this.finishNode(i, a ? "ClassDeclaration" : "ClassExpression") }, n.parseClassElement = function(i) { if(this.eat(k.semi)) return null; var a = this.options.ecmaVersion,
                                m = this.startNode(),
                                E = "",
                                P = !1,
                                H = !1,
                                G = "method",
                                et = !1; if(this.eatContextual("static")) { if(a >= 13 && this.eat(k.braceL)) return this.parseClassStaticBlock(m), m;
                                this.isClassElementNameStart() || this.type === k.star ? et = !0 : E = "static" } if(m.static = et, !E && a >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === k.star) && !this.canInsertSemicolon() ? H = !0 : E = "async"), !E && (a >= 9 || !H) && this.eat(k.star) && (P = !0), !E && !H && !P) { var nt = this.value;
                                (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? G = nt : E = nt) } if(E ? (m.computed = !1, m.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), m.key.name = E, this.finishNode(m.key, "Identifier")) : this.parseClassElementName(m), a < 13 || this.type === k.parenL || G !== "method" || P || H) { var vt = !m.static && v(m, "constructor"),
                                    St = vt && i;
                                vt && G !== "method" && this.raise(m.key.start, "Constructor can't have get/set modifier"), m.kind = vt ? "constructor" : G, this.parseClassMethod(m, P, H, St) } else this.parseClassField(m); return m }, n.isClassElementNameStart = function() { return this.type === k.name || this.type === k.privateId || this.type === k.num || this.type === k.string || this.type === k.bracketL || this.type.keyword }, n.parseClassElementName = function(i) { this.type === k.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), i.computed = !1, i.key = this.parsePrivateIdent()) : this.parsePropertyName(i) }, n.parseClassMethod = function(i, a, m, E) { var P = i.key;
                            i.kind === "constructor" ? (a && this.raise(P.start, "Constructor can't be a generator"), m && this.raise(P.start, "Constructor can't be an async method")) : i.static && v(i, "prototype") && this.raise(P.start, "Classes may not have a static property named prototype"); var H = i.value = this.parseMethod(a, m, E); return i.kind === "get" && H.params.length !== 0 && this.raiseRecoverable(H.start, "getter should have no params"), i.kind === "set" && H.params.length !== 1 && this.raiseRecoverable(H.start, "setter should have exactly one param"), i.kind === "set" && H.params[0].type === "RestElement" && this.raiseRecoverable(H.params[0].start, "Setter cannot use rest params"), this.finishNode(i, "MethodDefinition") }, n.parseClassField = function(i) { if(v(i, "constructor") ? this.raise(i.key.start, "Classes can't have a field named 'constructor'") : i.static && v(i, "prototype") && this.raise(i.key.start, "Classes can't have a static field named 'prototype'"), this.eat(k.eq)) { var a = this.currentThisScope(),
                                    m = a.inClassFieldInit;
                                a.inClassFieldInit = !0, i.value = this.parseMaybeAssign(), a.inClassFieldInit = m } else i.value = null; return this.semicolon(), this.finishNode(i, "PropertyDefinition") }, n.parseClassStaticBlock = function(i) { i.body = []; var a = this.labels; for(this.labels = [], this.enterScope(Ve | Me); this.type !== k.braceR;) { var m = this.parseStatement(null);
                                i.body.push(m) } return this.next(), this.exitScope(), this.labels = a, this.finishNode(i, "StaticBlock") }, n.parseClassId = function(i, a) { this.type === k.name ? (i.id = this.parseIdent(), a && this.checkLValSimple(i.id, we, !1)) : (a === !0 && this.unexpected(), i.id = null) }, n.parseClassSuper = function(i) { i.superClass = this.eat(k._extends) ? this.parseExprSubscripts(null, !1) : null }, n.enterClassBody = function() { var i = { declared: Object.create(null), used: [] }; return this.privateNameStack.push(i), i.declared }, n.exitClassBody = function() { var i = this.privateNameStack.pop(),
                                a = i.declared,
                                m = i.used; if(this.options.checkPrivateFields)
                                for(var E = this.privateNameStack.length, P = E === 0 ? null : this.privateNameStack[E - 1], H = 0; H < m.length; ++H) { var G = m[H];
                                    ct(a, G.name) || (P ? P.used.push(G) : this.raiseRecoverable(G.start, "Private field '#" + G.name + "' must be declared in an enclosing class")) } };

                        function g(i, a) { var m = a.key.name,
                                E = i[m],
                                P = "true"; return a.type === "MethodDefinition" && (a.kind === "get" || a.kind === "set") && (P = (a.static ? "s" : "i") + a.kind), E === "iget" && P === "iset" || E === "iset" && P === "iget" || E === "sget" && P === "sset" || E === "sset" && P === "sget" ? (i[m] = "true", !1) : E ? !0 : (i[m] = P, !1) }

                        function v(i, a) { var m = i.computed,
                                E = i.key; return !m && (E.type === "Identifier" && E.name === a || E.type === "Literal" && E.value === a) } n.parseExportAllDeclaration = function(i, a) { return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (i.exported = this.parseModuleExportName(), this.checkExport(a, i.exported, this.lastTokStart)) : i.exported = null), this.expectContextual("from"), this.type !== k.string && this.unexpected(), i.source = this.parseExprAtom(), this.semicolon(), this.finishNode(i, "ExportAllDeclaration") }, n.parseExport = function(i, a) { if(this.next(), this.eat(k.star)) return this.parseExportAllDeclaration(i, a); if(this.eat(k._default)) return this.checkExport(a, "default", this.lastTokStart), i.declaration = this.parseExportDefaultDeclaration(), this.finishNode(i, "ExportDefaultDeclaration"); if(this.shouldParseExportStatement()) i.declaration = this.parseExportDeclaration(i), i.declaration.type === "VariableDeclaration" ? this.checkVariableExport(a, i.declaration.declarations) : this.checkExport(a, i.declaration.id, i.declaration.id.start), i.specifiers = [], i.source = null;
                            else { if(i.declaration = null, i.specifiers = this.parseExportSpecifiers(a), this.eatContextual("from")) this.type !== k.string && this.unexpected(), i.source = this.parseExprAtom();
                                else { for(var m = 0, E = i.specifiers; m < E.length; m += 1) { var P = E[m];
                                        this.checkUnreserved(P.local), this.checkLocalExport(P.local), P.local.type === "Literal" && this.raise(P.local.start, "A string literal cannot be used as an exported binding without `from`.") } i.source = null } this.semicolon() } return this.finishNode(i, "ExportNamedDeclaration") }, n.parseExportDeclaration = function(i) { return this.parseStatement(null) }, n.parseExportDefaultDeclaration = function() { var i; if(this.type === k._function || (i = this.isAsyncFunction())) { var a = this.startNode(); return this.next(), i && this.next(), this.parseFunction(a, o | f, !1, i) } else if(this.type === k._class) { var m = this.startNode(); return this.parseClass(m, "nullableID") } else { var E = this.parseMaybeAssign(); return this.semicolon(), E } }, n.checkExport = function(i, a, m) { i && (typeof a != "string" && (a = a.type === "Identifier" ? a.name : a.value), ct(i, a) && this.raiseRecoverable(m, "Duplicate export '" + a + "'"), i[a] = !0) }, n.checkPatternExport = function(i, a) { var m = a.type; if(m === "Identifier") this.checkExport(i, a, a.start);
                            else if(m === "ObjectPattern")
                                for(var E = 0, P = a.properties; E < P.length; E += 1) { var H = P[E];
                                    this.checkPatternExport(i, H) } else if(m === "ArrayPattern")
                                    for(var G = 0, et = a.elements; G < et.length; G += 1) { var nt = et[G];
                                        nt && this.checkPatternExport(i, nt) } else m === "Property" ? this.checkPatternExport(i, a.value) : m === "AssignmentPattern" ? this.checkPatternExport(i, a.left) : m === "RestElement" && this.checkPatternExport(i, a.argument) }, n.checkVariableExport = function(i, a) { if(i)
                                for(var m = 0, E = a; m < E.length; m += 1) { var P = E[m];
                                    this.checkPatternExport(i, P.id) } }, n.shouldParseExportStatement = function() { return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction() }, n.parseExportSpecifier = function(i) { var a = this.startNode(); return a.local = this.parseModuleExportName(), a.exported = this.eatContextual("as") ? this.parseModuleExportName() : a.local, this.checkExport(i, a.exported, a.exported.start), this.finishNode(a, "ExportSpecifier") }, n.parseExportSpecifiers = function(i) { var a = [],
                                m = !0; for(this.expect(k.braceL); !this.eat(k.braceR);) { if(m) m = !1;
                                else if(this.expect(k.comma), this.afterTrailingComma(k.braceR)) break;
                                a.push(this.parseExportSpecifier(i)) } return a }, n.parseImport = function(i) { return this.next(), this.type === k.string ? (i.specifiers = h, i.source = this.parseExprAtom()) : (i.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), i.source = this.type === k.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(i, "ImportDeclaration") }, n.parseImportSpecifier = function() { var i = this.startNode(); return i.imported = this.parseModuleExportName(), this.eatContextual("as") ? i.local = this.parseIdent() : (this.checkUnreserved(i.imported), i.local = i.imported), this.checkLValSimple(i.local, we), this.finishNode(i, "ImportSpecifier") }, n.parseImportDefaultSpecifier = function() { var i = this.startNode(); return i.local = this.parseIdent(), this.checkLValSimple(i.local, we), this.finishNode(i, "ImportDefaultSpecifier") }, n.parseImportNamespaceSpecifier = function() { var i = this.startNode(); return this.next(), this.expectContextual("as"), i.local = this.parseIdent(), this.checkLValSimple(i.local, we), this.finishNode(i, "ImportNamespaceSpecifier") }, n.parseImportSpecifiers = function() { var i = [],
                                a = !0; if(this.type === k.name && (i.push(this.parseImportDefaultSpecifier()), !this.eat(k.comma))) return i; if(this.type === k.star) return i.push(this.parseImportNamespaceSpecifier()), i; for(this.expect(k.braceL); !this.eat(k.braceR);) { if(a) a = !1;
                                else if(this.expect(k.comma), this.afterTrailingComma(k.braceR)) break;
                                i.push(this.parseImportSpecifier()) } return i }, n.parseModuleExportName = function() { if(this.options.ecmaVersion >= 13 && this.type === k.string) { var i = this.parseLiteral(this.value); return Bt.test(i.value) && this.raise(i.start, "An export name cannot include a lone surrogate."), i } return this.parseIdent(!0) }, n.adaptDirectivePrologue = function(i) { for(var a = 0; a < i.length && this.isDirectiveCandidate(i[a]); ++a) i[a].directive = i[a].expression.raw.slice(1, -1) }, n.isDirectiveCandidate = function(i) { return this.options.ecmaVersion >= 5 && i.type === "ExpressionStatement" && i.expression.type === "Literal" && typeof i.expression.value == "string" && (this.input[i.start] === '"' || this.input[i.start] === "'") }; var d = zt.prototype;
                        d.toAssignable = function(i, a, m) { if(this.options.ecmaVersion >= 6 && i) switch (i.type) {
                                case "Identifier":
                                    this.inAsync && i.name === "await" && this.raise(i.start, "Cannot use 'await' as identifier inside an async function"); break;
                                case "ObjectPattern":
                                case "ArrayPattern":
                                case "AssignmentPattern":
                                case "RestElement":
                                    break;
                                case "ObjectExpression":
                                    i.type = "ObjectPattern", m && this.checkPatternErrors(m, !0); for(var E = 0, P = i.properties; E < P.length; E += 1) { var H = P[E];
                                        this.toAssignable(H, a), H.type === "RestElement" && (H.argument.type === "ArrayPattern" || H.argument.type === "ObjectPattern") && this.raise(H.argument.start, "Unexpected token") } break;
                                case "Property":
                                    i.kind !== "init" && this.raise(i.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(i.value, a); break;
                                case "ArrayExpression":
                                    i.type = "ArrayPattern", m && this.checkPatternErrors(m, !0), this.toAssignableList(i.elements, a); break;
                                case "SpreadElement":
                                    i.type = "RestElement", this.toAssignable(i.argument, a), i.argument.type === "AssignmentPattern" && this.raise(i.argument.start, "Rest elements cannot have a default value"); break;
                                case "AssignmentExpression":
                                    i.operator !== "=" && this.raise(i.left.end, "Only '=' operator can be used for specifying default value."), i.type = "AssignmentPattern", delete i.operator, this.toAssignable(i.left, a); break;
                                case "ParenthesizedExpression":
                                    this.toAssignable(i.expression, a, m); break;
                                case "ChainExpression":
                                    this.raiseRecoverable(i.start, "Optional chaining cannot appear in left-hand side"); break;
                                case "MemberExpression":
                                    if(!a) break;
                                default:
                                    this.raise(i.start, "Assigning to rvalue") } else m && this.checkPatternErrors(m, !0); return i }, d.toAssignableList = function(i, a) { for(var m = i.length, E = 0; E < m; E++) { var P = i[E];
                                P && this.toAssignable(P, a) } if(m) { var H = i[m - 1];
                                this.options.ecmaVersion === 6 && a && H && H.type === "RestElement" && H.argument.type !== "Identifier" && this.unexpected(H.argument.start) } return i }, d.parseSpread = function(i) { var a = this.startNode(); return this.next(), a.argument = this.parseMaybeAssign(!1, i), this.finishNode(a, "SpreadElement") }, d.parseRestBinding = function() { var i = this.startNode(); return this.next(), this.options.ecmaVersion === 6 && this.type !== k.name && this.unexpected(), i.argument = this.parseBindingAtom(), this.finishNode(i, "RestElement") }, d.parseBindingAtom = function() { if(this.options.ecmaVersion >= 6) switch (this.type) {
                                case k.bracketL:
                                    var i = this.startNode(); return this.next(), i.elements = this.parseBindingList(k.bracketR, !0, !0), this.finishNode(i, "ArrayPattern");
                                case k.braceL:
                                    return this.parseObj(!0) }
                            return this.parseIdent() }, d.parseBindingList = function(i, a, m, E) { for(var P = [], H = !0; !this.eat(i);)
                                if(H ? H = !1 : this.expect(k.comma), a && this.type === k.comma) P.push(null);
                                else { if(m && this.afterTrailingComma(i)) break; if(this.type === k.ellipsis) { var G = this.parseRestBinding();
                                        this.parseBindingListItem(G), P.push(G), this.type === k.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(i); break } else P.push(this.parseAssignableListItem(E)) } return P }, d.parseAssignableListItem = function(i) { var a = this.parseMaybeDefault(this.start, this.startLoc); return this.parseBindingListItem(a), a }, d.parseBindingListItem = function(i) { return i }, d.parseMaybeDefault = function(i, a, m) { if(m = m || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(k.eq)) return m; var E = this.startNodeAt(i, a); return E.left = m, E.right = this.parseMaybeAssign(), this.finishNode(E, "AssignmentPattern") }, d.checkLValSimple = function(i, a, m) { a === void 0 && (a = oi); var E = a !== oi; switch (i.type) {
                                case "Identifier":
                                    this.strict && this.reservedWordsStrictBind.test(i.name) && this.raiseRecoverable(i.start, (E ? "Binding " : "Assigning to ") + i.name + " in strict mode"), E && (a === we && i.name === "let" && this.raiseRecoverable(i.start, "let is disallowed as a lexically bound name"), m && (ct(m, i.name) && this.raiseRecoverable(i.start, "Argument name clash"), m[i.name] = !0), a !== Ut && this.declareName(i.name, a, i.start)); break;
                                case "ChainExpression":
                                    this.raiseRecoverable(i.start, "Optional chaining cannot appear in left-hand side"); break;
                                case "MemberExpression":
                                    E && this.raiseRecoverable(i.start, "Binding member expression"); break;
                                case "ParenthesizedExpression":
                                    return E && this.raiseRecoverable(i.start, "Binding parenthesized expression"), this.checkLValSimple(i.expression, a, m);
                                default:
                                    this.raise(i.start, (E ? "Binding" : "Assigning to") + " rvalue") } }, d.checkLValPattern = function(i, a, m) { switch (a === void 0 && (a = oi), i.type) {
                                case "ObjectPattern":
                                    for(var E = 0, P = i.properties; E < P.length; E += 1) { var H = P[E];
                                        this.checkLValInnerPattern(H, a, m) } break;
                                case "ArrayPattern":
                                    for(var G = 0, et = i.elements; G < et.length; G += 1) { var nt = et[G];
                                        nt && this.checkLValInnerPattern(nt, a, m) } break;
                                default:
                                    this.checkLValSimple(i, a, m) } }, d.checkLValInnerPattern = function(i, a, m) { switch (a === void 0 && (a = oi), i.type) {
                                case "Property":
                                    this.checkLValInnerPattern(i.value, a, m); break;
                                case "AssignmentPattern":
                                    this.checkLValPattern(i.left, a, m); break;
                                case "RestElement":
                                    this.checkLValPattern(i.argument, a, m); break;
                                default:
                                    this.checkLValPattern(i, a, m) } }; var p = function(a, m, E, P, H) { this.token = a, this.isExpr = !!m, this.preserveSpace = !!E, this.override = P, this.generator = !!H },
                            x = { b_stat: new p("{", !1), b_expr: new p("{", !0), b_tmpl: new p("${", !1), p_stat: new p("(", !1), p_expr: new p("(", !0), q_tmpl: new p("`", !0, !0, function(i) { return i.tryReadTemplateToken() }), f_stat: new p("function", !1), f_expr: new p("function", !0), f_expr_gen: new p("function", !0, !1, null, !0), f_gen: new p("function", !1, !1, null, !0) },
                            y = zt.prototype;
                        y.initialContext = function() { return [x.b_stat] }, y.curContext = function() { return this.context[this.context.length - 1] }, y.braceIsBlock = function(i) { var a = this.curContext(); return a === x.f_expr || a === x.f_stat ? !0 : i === k.colon && (a === x.b_stat || a === x.b_expr) ? !a.isExpr : i === k._return || i === k.name && this.exprAllowed ? ie.test(this.input.slice(this.lastTokEnd, this.start)) : i === k._else || i === k.semi || i === k.eof || i === k.parenR || i === k.arrow ? !0 : i === k.braceL ? a === x.b_stat : i === k._var || i === k._const || i === k.name ? !1 : !this.exprAllowed }, y.inGeneratorContext = function() { for(var i = this.context.length - 1; i >= 1; i--) { var a = this.context[i]; if(a.token === "function") return a.generator } return !1 }, y.updateContext = function(i) { var a, m = this.type;
                            m.keyword && i === k.dot ? this.exprAllowed = !1 : (a = m.updateContext) ? a.call(this, i) : this.exprAllowed = m.beforeExpr }, y.overrideContext = function(i) { this.curContext() !== i && (this.context[this.context.length - 1] = i) }, k.parenR.updateContext = k.braceR.updateContext = function() { if(this.context.length === 1) { this.exprAllowed = !0; return } var i = this.context.pop();
                            i === x.b_stat && this.curContext()
                                .token === "function" && (i = this.context.pop()), this.exprAllowed = !i.isExpr }, k.braceL.updateContext = function(i) { this.context.push(this.braceIsBlock(i) ? x.b_stat : x.b_expr), this.exprAllowed = !0 }, k.dollarBraceL.updateContext = function() { this.context.push(x.b_tmpl), this.exprAllowed = !0 }, k.parenL.updateContext = function(i) { var a = i === k._if || i === k._for || i === k._with || i === k._while;
                            this.context.push(a ? x.p_stat : x.p_expr), this.exprAllowed = !0 }, k.incDec.updateContext = function() {}, k._function.updateContext = k._class.updateContext = function(i) { i.beforeExpr && i !== k._else && !(i === k.semi && this.curContext() !== x.p_stat) && !(i === k._return && ie.test(this.input.slice(this.lastTokEnd, this.start))) && !((i === k.colon || i === k.braceL) && this.curContext() === x.b_stat) ? this.context.push(x.f_expr) : this.context.push(x.f_stat), this.exprAllowed = !1 }, k.colon.updateContext = function() { this.curContext()
                                .token === "function" && this.context.pop(), this.exprAllowed = !0 }, k.backQuote.updateContext = function() { this.curContext() === x.q_tmpl ? this.context.pop() : this.context.push(x.q_tmpl), this.exprAllowed = !1 }, k.star.updateContext = function(i) { if(i === k._function) { var a = this.context.length - 1;
                                this.context[a] === x.f_expr ? this.context[a] = x.f_expr_gen : this.context[a] = x.f_gen } this.exprAllowed = !0 }, k.name.updateContext = function(i) { var a = !1;
                            this.options.ecmaVersion >= 6 && i !== k.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (a = !0), this.exprAllowed = a }; var w = zt.prototype;
                        w.checkPropClash = function(i, a, m) { if(!(this.options.ecmaVersion >= 9 && i.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (i.computed || i.method || i.shorthand))) { var E = i.key,
                                    P; switch (E.type) {
                                    case "Identifier":
                                        P = E.name; break;
                                    case "Literal":
                                        P = String(E.value); break;
                                    default:
                                        return } var H = i.kind; if(this.options.ecmaVersion >= 6) { P === "__proto__" && H === "init" && (a.proto && (m ? m.doubleProto < 0 && (m.doubleProto = E.start) : this.raiseRecoverable(E.start, "Redefinition of __proto__ property")), a.proto = !0); return } P = "$" + P; var G = a[P]; if(G) { var et;
                                    H === "init" ? et = this.strict && G.init || G.get || G.set : et = G.init || G[H], et && this.raiseRecoverable(E.start, "Redefinition of property") } else G = a[P] = { init: !1, get: !1, set: !1 };
                                G[H] = !0 } }, w.parseExpression = function(i, a) { var m = this.start,
                                E = this.startLoc,
                                P = this.parseMaybeAssign(i, a); if(this.type === k.comma) { var H = this.startNodeAt(m, E); for(H.expressions = [P]; this.eat(k.comma);) H.expressions.push(this.parseMaybeAssign(i, a)); return this.finishNode(H, "SequenceExpression") } return P }, w.parseMaybeAssign = function(i, a, m) { if(this.isContextual("yield")) { if(this.inGenerator) return this.parseYield(i);
                                this.exprAllowed = !1 } var E = !1,
                                P = -1,
                                H = -1,
                                G = -1;
                            a ? (P = a.parenthesizedAssign, H = a.trailingComma, G = a.doubleProto, a.parenthesizedAssign = a.trailingComma = -1) : (a = new r, E = !0); var et = this.start,
                                nt = this.startLoc;
                            (this.type === k.parenL || this.type === k.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = i === "await"); var vt = this.parseMaybeConditional(i, a); if(m && (vt = m.call(this, vt, et, nt)), this.type.isAssign) { var St = this.startNodeAt(et, nt); return St.operator = this.value, this.type === k.eq && (vt = this.toAssignable(vt, !1, a)), E || (a.parenthesizedAssign = a.trailingComma = a.doubleProto = -1), a.shorthandAssign >= vt.start && (a.shorthandAssign = -1), this.type === k.eq ? this.checkLValPattern(vt) : this.checkLValSimple(vt), St.left = vt, this.next(), St.right = this.parseMaybeAssign(i), G > -1 && (a.doubleProto = G), this.finishNode(St, "AssignmentExpression") } else E && this.checkExpressionErrors(a, !0); return P > -1 && (a.parenthesizedAssign = P), H > -1 && (a.trailingComma = H), vt }, w.parseMaybeConditional = function(i, a) { var m = this.start,
                                E = this.startLoc,
                                P = this.parseExprOps(i, a); if(this.checkExpressionErrors(a)) return P; if(this.eat(k.question)) { var H = this.startNodeAt(m, E); return H.test = P, H.consequent = this.parseMaybeAssign(), this.expect(k.colon), H.alternate = this.parseMaybeAssign(i), this.finishNode(H, "ConditionalExpression") } return P }, w.parseExprOps = function(i, a) { var m = this.start,
                                E = this.startLoc,
                                P = this.parseMaybeUnary(a, !1, !1, i); return this.checkExpressionErrors(a) || P.start === m && P.type === "ArrowFunctionExpression" ? P : this.parseExprOp(P, m, E, -1, i) }, w.parseExprOp = function(i, a, m, E, P) { var H = this.type.binop; if(H != null && (!P || this.type !== k._in) && H > E) { var G = this.type === k.logicalOR || this.type === k.logicalAND,
                                    et = this.type === k.coalesce;
                                et && (H = k.logicalAND.binop); var nt = this.value;
                                this.next(); var vt = this.start,
                                    St = this.startLoc,
                                    Qt = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, P), vt, St, H, P),
                                    Be = this.buildBinary(a, m, i, Qt, nt, G || et); return (G && this.type === k.coalesce || et && (this.type === k.logicalOR || this.type === k.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(Be, a, m, E, P) } return i }, w.buildBinary = function(i, a, m, E, P, H) { E.type === "PrivateIdentifier" && this.raise(E.start, "Private identifier can only be left side of binary expression"); var G = this.startNodeAt(i, a); return G.left = m, G.operator = P, G.right = E, this.finishNode(G, H ? "LogicalExpression" : "BinaryExpression") }, w.parseMaybeUnary = function(i, a, m, E) { var P = this.start,
                                H = this.startLoc,
                                G; if(this.isContextual("await") && this.canAwait) G = this.parseAwait(E), a = !0;
                            else if(this.type.prefix) { var et = this.startNode(),
                                    nt = this.type === k.incDec;
                                et.operator = this.value, et.prefix = !0, this.next(), et.argument = this.parseMaybeUnary(null, !0, nt, E), this.checkExpressionErrors(i, !0), nt ? this.checkLValSimple(et.argument) : this.strict && et.operator === "delete" && et.argument.type === "Identifier" ? this.raiseRecoverable(et.start, "Deleting local variable in strict mode") : et.operator === "delete" && _(et.argument) ? this.raiseRecoverable(et.start, "Private fields can not be deleted") : a = !0, G = this.finishNode(et, nt ? "UpdateExpression" : "UnaryExpression") } else if(!a && this.type === k.privateId)(E || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), G = this.parsePrivateIdent(), this.type !== k._in && this.unexpected();
                            else { if(G = this.parseExprSubscripts(i, E), this.checkExpressionErrors(i)) return G; for(; this.type.postfix && !this.canInsertSemicolon();) { var vt = this.startNodeAt(P, H);
                                    vt.operator = this.value, vt.prefix = !1, vt.argument = G, this.checkLValSimple(G), this.next(), G = this.finishNode(vt, "UpdateExpression") } } if(!m && this.eat(k.starstar))
                                if(a) this.unexpected(this.lastTokStart);
                                else return this.buildBinary(P, H, G, this.parseMaybeUnary(null, !1, !1, E), "**", !1);
                            else return G };

                        function _(i) { return i.type === "MemberExpression" && i.property.type === "PrivateIdentifier" || i.type === "ChainExpression" && _(i.expression) } w.parseExprSubscripts = function(i, a) { var m = this.start,
                                E = this.startLoc,
                                P = this.parseExprAtom(i, a); if(P.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return P; var H = this.parseSubscripts(P, m, E, !1, a); return i && H.type === "MemberExpression" && (i.parenthesizedAssign >= H.start && (i.parenthesizedAssign = -1), i.parenthesizedBind >= H.start && (i.parenthesizedBind = -1), i.trailingComma >= H.start && (i.trailingComma = -1)), H }, w.parseSubscripts = function(i, a, m, E, P) { for(var H = this.options.ecmaVersion >= 8 && i.type === "Identifier" && i.name === "async" && this.lastTokEnd === i.end && !this.canInsertSemicolon() && i.end - i.start === 5 && this.potentialArrowAt === i.start, G = !1;;) { var et = this.parseSubscript(i, a, m, E, H, G, P); if(et.optional && (G = !0), et === i || et.type === "ArrowFunctionExpression") { if(G) { var nt = this.startNodeAt(a, m);
                                        nt.expression = et, et = this.finishNode(nt, "ChainExpression") } return et } i = et } }, w.shouldParseAsyncArrow = function() { return !this.canInsertSemicolon() && this.eat(k.arrow) }, w.parseSubscriptAsyncArrow = function(i, a, m, E) { return this.parseArrowExpression(this.startNodeAt(i, a), m, !0, E) }, w.parseSubscript = function(i, a, m, E, P, H, G) { var et = this.options.ecmaVersion >= 11,
                                nt = et && this.eat(k.questionDot);
                            E && nt && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions"); var vt = this.eat(k.bracketL); if(vt || nt && this.type !== k.parenL && this.type !== k.backQuote || this.eat(k.dot)) { var St = this.startNodeAt(a, m);
                                St.object = i, vt ? (St.property = this.parseExpression(), this.expect(k.bracketR)) : this.type === k.privateId && i.type !== "Super" ? St.property = this.parsePrivateIdent() : St.property = this.parseIdent(this.options.allowReserved !== "never"), St.computed = !!vt, et && (St.optional = nt), i = this.finishNode(St, "MemberExpression") } else if(!E && this.eat(k.parenL)) { var Qt = new r,
                                    Be = this.yieldPos,
                                    ze = this.awaitPos,
                                    qe = this.awaitIdentPos;
                                this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0; var ci = this.parseExprList(k.parenR, this.options.ecmaVersion >= 8, !1, Qt); if(P && !nt && this.shouldParseAsyncArrow()) return this.checkPatternErrors(Qt, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = Be, this.awaitPos = ze, this.awaitIdentPos = qe, this.parseSubscriptAsyncArrow(a, m, ci, G);
                                this.checkExpressionErrors(Qt, !0), this.yieldPos = Be || this.yieldPos, this.awaitPos = ze || this.awaitPos, this.awaitIdentPos = qe || this.awaitIdentPos; var Ue = this.startNodeAt(a, m);
                                Ue.callee = i, Ue.arguments = ci, et && (Ue.optional = nt), i = this.finishNode(Ue, "CallExpression") } else if(this.type === k.backQuote) {
                                (nt || H) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions"); var He = this.startNodeAt(a, m);
                                He.tag = i, He.quasi = this.parseTemplate({ isTagged: !0 }), i = this.finishNode(He, "TaggedTemplateExpression") } return i }, w.parseExprAtom = function(i, a, m) { this.type === k.slash && this.readRegexp(); var E, P = this.potentialArrowAt === this.start; switch (this.type) {
                                case k._super:
                                    return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), E = this.startNode(), this.next(), this.type === k.parenL && !this.allowDirectSuper && this.raise(E.start, "super() call outside constructor of a subclass"), this.type !== k.dot && this.type !== k.bracketL && this.type !== k.parenL && this.unexpected(), this.finishNode(E, "Super");
                                case k._this:
                                    return E = this.startNode(), this.next(), this.finishNode(E, "ThisExpression");
                                case k.name:
                                    var H = this.start,
                                        G = this.startLoc,
                                        et = this.containsEsc,
                                        nt = this.parseIdent(!1); if(this.options.ecmaVersion >= 8 && !et && nt.name === "async" && !this.canInsertSemicolon() && this.eat(k._function)) return this.overrideContext(x.f_expr), this.parseFunction(this.startNodeAt(H, G), 0, !1, !0, a); if(P && !this.canInsertSemicolon()) { if(this.eat(k.arrow)) return this.parseArrowExpression(this.startNodeAt(H, G), [nt], !1, a); if(this.options.ecmaVersion >= 8 && nt.name === "async" && this.type === k.name && !et && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return nt = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(k.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(H, G), [nt], !0, a) } return nt;
                                case k.regexp:
                                    var vt = this.value; return E = this.parseLiteral(vt.value), E.regex = { pattern: vt.pattern, flags: vt.flags }, E;
                                case k.num:
                                case k.string:
                                    return this.parseLiteral(this.value);
                                case k._null:
                                case k._true:
                                case k._false:
                                    return E = this.startNode(), E.value = this.type === k._null ? null : this.type === k._true, E.raw = this.type.keyword, this.next(), this.finishNode(E, "Literal");
                                case k.parenL:
                                    var St = this.start,
                                        Qt = this.parseParenAndDistinguishExpression(P, a); return i && (i.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(Qt) && (i.parenthesizedAssign = St), i.parenthesizedBind < 0 && (i.parenthesizedBind = St)), Qt;
                                case k.bracketL:
                                    return E = this.startNode(), this.next(), E.elements = this.parseExprList(k.bracketR, !0, !0, i), this.finishNode(E, "ArrayExpression");
                                case k.braceL:
                                    return this.overrideContext(x.b_expr), this.parseObj(!1, i);
                                case k._function:
                                    return E = this.startNode(), this.next(), this.parseFunction(E, 0);
                                case k._class:
                                    return this.parseClass(this.startNode(), !1);
                                case k._new:
                                    return this.parseNew();
                                case k.backQuote:
                                    return this.parseTemplate();
                                case k._import:
                                    return this.options.ecmaVersion >= 11 ? this.parseExprImport(m) : this.unexpected();
                                default:
                                    return this.parseExprAtomDefault() } }, w.parseExprAtomDefault = function() { this.unexpected() }, w.parseExprImport = function(i) { var a = this.startNode();
                            this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"); var m = this.parseIdent(!0); if(this.type === k.parenL && !i) return this.parseDynamicImport(a); if(this.type === k.dot) return a.meta = m, this.parseImportMeta(a);
                            this.unexpected() }, w.parseDynamicImport = function(i) { if(this.next(), i.source = this.parseMaybeAssign(), !this.eat(k.parenR)) { var a = this.start;
                                this.eat(k.comma) && this.eat(k.parenR) ? this.raiseRecoverable(a, "Trailing comma is not allowed in import()") : this.unexpected(a) } return this.finishNode(i, "ImportExpression") }, w.parseImportMeta = function(i) { this.next(); var a = this.containsEsc; return i.property = this.parseIdent(!0), i.property.name !== "meta" && this.raiseRecoverable(i.property.start, "The only valid meta property for import is 'import.meta'"), a && this.raiseRecoverable(i.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(i.start, "Cannot use 'import.meta' outside a module"), this.finishNode(i, "MetaProperty") }, w.parseLiteral = function(i) { var a = this.startNode(); return a.value = i, a.raw = this.input.slice(this.start, this.end), a.raw.charCodeAt(a.raw.length - 1) === 110 && (a.bigint = a.raw.slice(0, -1)
                                .replace(/_/g, "")), this.next(), this.finishNode(a, "Literal") }, w.parseParenExpression = function() { this.expect(k.parenL); var i = this.parseExpression(); return this.expect(k.parenR), i }, w.shouldParseArrow = function(i) { return !this.canInsertSemicolon() }, w.parseParenAndDistinguishExpression = function(i, a) { var m = this.start,
                                E = this.startLoc,
                                P, H = this.options.ecmaVersion >= 8; if(this.options.ecmaVersion >= 6) { this.next(); var G = this.start,
                                    et = this.startLoc,
                                    nt = [],
                                    vt = !0,
                                    St = !1,
                                    Qt = new r,
                                    Be = this.yieldPos,
                                    ze = this.awaitPos,
                                    qe; for(this.yieldPos = 0, this.awaitPos = 0; this.type !== k.parenR;)
                                    if(vt ? vt = !1 : this.expect(k.comma), H && this.afterTrailingComma(k.parenR, !0)) { St = !0; break } else if(this.type === k.ellipsis) { qe = this.start, nt.push(this.parseParenItem(this.parseRestBinding())), this.type === k.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"); break } else nt.push(this.parseMaybeAssign(!1, Qt, this.parseParenItem)); var ci = this.lastTokEnd,
                                    Ue = this.lastTokEndLoc; if(this.expect(k.parenR), i && this.shouldParseArrow(nt) && this.eat(k.arrow)) return this.checkPatternErrors(Qt, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = Be, this.awaitPos = ze, this.parseParenArrowList(m, E, nt, a);
                                (!nt.length || St) && this.unexpected(this.lastTokStart), qe && this.unexpected(qe), this.checkExpressionErrors(Qt, !0), this.yieldPos = Be || this.yieldPos, this.awaitPos = ze || this.awaitPos, nt.length > 1 ? (P = this.startNodeAt(G, et), P.expressions = nt, this.finishNodeAt(P, "SequenceExpression", ci, Ue)) : P = nt[0] } else P = this.parseParenExpression(); if(this.options.preserveParens) { var He = this.startNodeAt(m, E); return He.expression = P, this.finishNode(He, "ParenthesizedExpression") } else return P }, w.parseParenItem = function(i) { return i }, w.parseParenArrowList = function(i, a, m, E) { return this.parseArrowExpression(this.startNodeAt(i, a), m, !1, E) }; var A = [];
                        w.parseNew = function() { this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new"); var i = this.startNode(); if(this.next(), this.options.ecmaVersion >= 6 && this.type === k.dot) { var a = this.startNodeAt(i.start, i.startLoc);
                                a.name = "new", i.meta = this.finishNode(a, "Identifier"), this.next(); var m = this.containsEsc; return i.property = this.parseIdent(!0), i.property.name !== "target" && this.raiseRecoverable(i.property.start, "The only valid meta property for new is 'new.target'"), m && this.raiseRecoverable(i.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(i.start, "'new.target' can only be used in functions and class static block"), this.finishNode(i, "MetaProperty") } var E = this.start,
                                P = this.startLoc; return i.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), E, P, !0, !1), this.eat(k.parenL) ? i.arguments = this.parseExprList(k.parenR, this.options.ecmaVersion >= 8, !1) : i.arguments = A, this.finishNode(i, "NewExpression") }, w.parseTemplateElement = function(i) { var a = i.isTagged,
                                m = this.startNode(); return this.type === k.invalidTemplate ? (a || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), m.value = { raw: this.value, cooked: null }) : m.value = { raw: this.input.slice(this.start, this.end)
                                    .replace(/\r\n?/g, `
`), cooked: this.value }, this.next(), m.tail = this.type === k.backQuote, this.finishNode(m, "TemplateElement") }, w.parseTemplate = function(i) { i === void 0 && (i = {}); var a = i.isTagged;
                            a === void 0 && (a = !1); var m = this.startNode();
                            this.next(), m.expressions = []; var E = this.parseTemplateElement({ isTagged: a }); for(m.quasis = [E]; !E.tail;) this.type === k.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(k.dollarBraceL), m.expressions.push(this.parseExpression()), this.expect(k.braceR), m.quasis.push(E = this.parseTemplateElement({ isTagged: a })); return this.next(), this.finishNode(m, "TemplateLiteral") }, w.isAsyncProp = function(i) { return !i.computed && i.key.type === "Identifier" && i.key.name === "async" && (this.type === k.name || this.type === k.num || this.type === k.string || this.type === k.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === k.star) && !ie.test(this.input.slice(this.lastTokEnd, this.start)) }, w.parseObj = function(i, a) { var m = this.startNode(),
                                E = !0,
                                P = {}; for(m.properties = [], this.next(); !this.eat(k.braceR);) { if(E) E = !1;
                                else if(this.expect(k.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(k.braceR)) break; var H = this.parseProperty(i, a);
                                i || this.checkPropClash(H, P, a), m.properties.push(H) } return this.finishNode(m, i ? "ObjectPattern" : "ObjectExpression") }, w.parseProperty = function(i, a) { var m = this.startNode(),
                                E, P, H, G; if(this.options.ecmaVersion >= 9 && this.eat(k.ellipsis)) return i ? (m.argument = this.parseIdent(!1), this.type === k.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(m, "RestElement")) : (m.argument = this.parseMaybeAssign(!1, a), this.type === k.comma && a && a.trailingComma < 0 && (a.trailingComma = this.start), this.finishNode(m, "SpreadElement"));
                            this.options.ecmaVersion >= 6 && (m.method = !1, m.shorthand = !1, (i || a) && (H = this.start, G = this.startLoc), i || (E = this.eat(k.star))); var et = this.containsEsc; return this.parsePropertyName(m), !i && !et && this.options.ecmaVersion >= 8 && !E && this.isAsyncProp(m) ? (P = !0, E = this.options.ecmaVersion >= 9 && this.eat(k.star), this.parsePropertyName(m)) : P = !1, this.parsePropertyValue(m, i, E, P, H, G, a, et), this.finishNode(m, "Property") }, w.parseGetterSetter = function(i) { i.kind = i.key.name, this.parsePropertyName(i), i.value = this.parseMethod(!1); var a = i.kind === "get" ? 0 : 1; if(i.value.params.length !== a) { var m = i.value.start;
                                i.kind === "get" ? this.raiseRecoverable(m, "getter should have no params") : this.raiseRecoverable(m, "setter should have exactly one param") } else i.kind === "set" && i.value.params[0].type === "RestElement" && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params") }, w.parsePropertyValue = function(i, a, m, E, P, H, G, et) {
                            (m || E) && this.type === k.colon && this.unexpected(), this.eat(k.colon) ? (i.value = a ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, G), i.kind = "init") : this.options.ecmaVersion >= 6 && this.type === k.parenL ? (a && this.unexpected(), i.kind = "init", i.method = !0, i.value = this.parseMethod(m, E)) : !a && !et && this.options.ecmaVersion >= 5 && !i.computed && i.key.type === "Identifier" && (i.key.name === "get" || i.key.name === "set") && this.type !== k.comma && this.type !== k.braceR && this.type !== k.eq ? ((m || E) && this.unexpected(), this.parseGetterSetter(i)) : this.options.ecmaVersion >= 6 && !i.computed && i.key.type === "Identifier" ? ((m || E) && this.unexpected(), this.checkUnreserved(i.key), i.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = P), i.kind = "init", a ? i.value = this.parseMaybeDefault(P, H, this.copyNode(i.key)) : this.type === k.eq && G ? (G.shorthandAssign < 0 && (G.shorthandAssign = this.start), i.value = this.parseMaybeDefault(P, H, this.copyNode(i.key))) : i.value = this.copyNode(i.key), i.shorthand = !0) : this.unexpected() }, w.parsePropertyName = function(i) { if(this.options.ecmaVersion >= 6) { if(this.eat(k.bracketL)) return i.computed = !0, i.key = this.parseMaybeAssign(), this.expect(k.bracketR), i.key;
                                i.computed = !1 } return i.key = this.type === k.num || this.type === k.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never") }, w.initFunction = function(i) { i.id = null, this.options.ecmaVersion >= 6 && (i.generator = i.expression = !1), this.options.ecmaVersion >= 8 && (i.async = !1) }, w.parseMethod = function(i, a, m) { var E = this.startNode(),
                                P = this.yieldPos,
                                H = this.awaitPos,
                                G = this.awaitIdentPos; return this.initFunction(E), this.options.ecmaVersion >= 6 && (E.generator = i), this.options.ecmaVersion >= 8 && (E.async = !!a), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ci(a, E.generator) | Me | (m ? Di : 0)), this.expect(k.parenL), E.params = this.parseBindingList(k.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(E, !1, !0, !1), this.yieldPos = P, this.awaitPos = H, this.awaitIdentPos = G, this.finishNode(E, "FunctionExpression") }, w.parseArrowExpression = function(i, a, m, E) { var P = this.yieldPos,
                                H = this.awaitPos,
                                G = this.awaitIdentPos; return this.enterScope(Ci(m, !1) | Rt), this.initFunction(i), this.options.ecmaVersion >= 8 && (i.async = !!m), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, i.params = this.toAssignableList(a, !0), this.parseFunctionBody(i, !0, !1, E), this.yieldPos = P, this.awaitPos = H, this.awaitIdentPos = G, this.finishNode(i, "ArrowFunctionExpression") }, w.parseFunctionBody = function(i, a, m, E) { var P = a && this.type !== k.braceL,
                                H = this.strict,
                                G = !1; if(P) i.body = this.parseMaybeAssign(E), i.expression = !0, this.checkParams(i, !1);
                            else { var et = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(i.params);
                                (!H || et) && (G = this.strictDirective(this.end), G && et && this.raiseRecoverable(i.start, "Illegal 'use strict' directive in function with non-simple parameter list")); var nt = this.labels;
                                this.labels = [], G && (this.strict = !0), this.checkParams(i, !H && !G && !a && !m && this.isSimpleParamList(i.params)), this.strict && i.id && this.checkLValSimple(i.id, Ut), i.body = this.parseBlock(!1, void 0, G && !H), i.expression = !1, this.adaptDirectivePrologue(i.body.body), this.labels = nt } this.exitScope() }, w.isSimpleParamList = function(i) { for(var a = 0, m = i; a < m.length; a += 1) { var E = m[a]; if(E.type !== "Identifier") return !1 } return !0 }, w.checkParams = function(i, a) { for(var m = Object.create(null), E = 0, P = i.params; E < P.length; E += 1) { var H = P[E];
                                this.checkLValInnerPattern(H, wi, a ? null : m) } }, w.parseExprList = function(i, a, m, E) { for(var P = [], H = !0; !this.eat(i);) { if(H) H = !1;
                                else if(this.expect(k.comma), a && this.afterTrailingComma(i)) break; var G = void 0;
                                m && this.type === k.comma ? G = null : this.type === k.ellipsis ? (G = this.parseSpread(E), E && this.type === k.comma && E.trailingComma < 0 && (E.trailingComma = this.start)) : G = this.parseMaybeAssign(!1, E), P.push(G) } return P }, w.checkUnreserved = function(i) { var a = i.start,
                                m = i.end,
                                E = i.name; if(this.inGenerator && E === "yield" && this.raiseRecoverable(a, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && E === "await" && this.raiseRecoverable(a, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope()
                                .inClassFieldInit && E === "arguments" && this.raiseRecoverable(a, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (E === "arguments" || E === "await") && this.raise(a, "Cannot use " + E + " in class static initialization block"), this.keywords.test(E) && this.raise(a, "Unexpected keyword '" + E + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(a, m)
                                    .indexOf("\\") !== -1)) { var P = this.strict ? this.reservedWordsStrict : this.reservedWords;
                                P.test(E) && (!this.inAsync && E === "await" && this.raiseRecoverable(a, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(a, "The keyword '" + E + "' is reserved")) } }, w.parseIdent = function(i) { var a = this.parseIdentNode(); return this.next(!!i), this.finishNode(a, "Identifier"), i || (this.checkUnreserved(a), a.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = a.start)), a }, w.parseIdentNode = function() { var i = this.startNode(); return this.type === k.name ? i.name = this.value : this.type.keyword ? (i.name = this.type.keyword, (i.name === "class" || i.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = k.name) : this.unexpected(), i }, w.parsePrivateIdent = function() { var i = this.startNode(); return this.type === k.privateId ? i.name = this.value : this.unexpected(), this.next(), this.finishNode(i, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(i.start, "Private field '#" + i.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(i)), i }, w.parseYield = function(i) { this.yieldPos || (this.yieldPos = this.start); var a = this.startNode(); return this.next(), this.type === k.semi || this.canInsertSemicolon() || this.type !== k.star && !this.type.startsExpr ? (a.delegate = !1, a.argument = null) : (a.delegate = this.eat(k.star), a.argument = this.parseMaybeAssign(i)), this.finishNode(a, "YieldExpression") }, w.parseAwait = function(i) { this.awaitPos || (this.awaitPos = this.start); var a = this.startNode(); return this.next(), a.argument = this.parseMaybeUnary(null, !0, !1, i), this.finishNode(a, "AwaitExpression") }; var c = zt.prototype;
                        c.raise = function(i, a) { var m = mi(this.input, i);
                            a += " (" + m.line + ":" + m.column + ")"; var E = new SyntaxError(a); throw E.pos = i, E.loc = m, E.raisedAt = this.pos, E }, c.raiseRecoverable = c.raise, c.curPosition = function() { if(this.options.locations) return new oe(this.curLine, this.pos - this.lineStart) }; var C = zt.prototype,
                            S = function(a) { this.flags = a, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = !1 };
                        C.enterScope = function(i) { this.scopeStack.push(new S(i)) }, C.exitScope = function() { this.scopeStack.pop() }, C.treatFunctionsAsVarInScope = function(i) { return i.flags & Ee || !this.inModule && i.flags & Pe }, C.declareName = function(i, a, m) { var E = !1; if(a === we) { var P = this.currentScope();
                                E = P.lexical.indexOf(i) > -1 || P.functions.indexOf(i) > -1 || P.var.indexOf(i) > -1, P.lexical.push(i), this.inModule && P.flags & Pe && delete this.undefinedExports[i] } else if(a === hi) { var H = this.currentScope();
                                H.lexical.push(i) } else if(a === Kt) { var G = this.currentScope();
                                this.treatFunctionsAsVar ? E = G.lexical.indexOf(i) > -1 : E = G.lexical.indexOf(i) > -1 || G.var.indexOf(i) > -1, G.functions.push(i) } else
                                for(var et = this.scopeStack.length - 1; et >= 0; --et) { var nt = this.scopeStack[et]; if(nt.lexical.indexOf(i) > -1 && !(nt.flags & Pi && nt.lexical[0] === i) || !this.treatFunctionsAsVarInScope(nt) && nt.functions.indexOf(i) > -1) { E = !0; break } if(nt.var.push(i), this.inModule && nt.flags & Pe && delete this.undefinedExports[i], nt.flags & yi) break } E && this.raiseRecoverable(m, "Identifier '" + i + "' has already been declared") }, C.checkLocalExport = function(i) { this.scopeStack[0].lexical.indexOf(i.name) === -1 && this.scopeStack[0].var.indexOf(i.name) === -1 && (this.undefinedExports[i.name] = i) }, C.currentScope = function() { return this.scopeStack[this.scopeStack.length - 1] }, C.currentVarScope = function() { for(var i = this.scopeStack.length - 1;; i--) { var a = this.scopeStack[i]; if(a.flags & yi) return a } }, C.currentThisScope = function() { for(var i = this.scopeStack.length - 1;; i--) { var a = this.scopeStack[i]; if(a.flags & yi && !(a.flags & Rt)) return a } }; var F = function(a, m, E) { this.type = "", this.start = m, this.end = 0, a.options.locations && (this.loc = new Ne(a, E)), a.options.directSourceFile && (this.sourceFile = a.options.directSourceFile), a.options.ranges && (this.range = [m, 0]) },
                            b = zt.prototype;
                        b.startNode = function() { return new F(this, this.start, this.startLoc) }, b.startNodeAt = function(i, a) { return new F(this, i, a) };

                        function B(i, a, m, E) { return i.type = a, i.end = m, this.options.locations && (i.loc.end = E), this.options.ranges && (i.range[1] = m), i } b.finishNode = function(i, a) { return B.call(this, i, a, this.lastTokEnd, this.lastTokEndLoc) }, b.finishNodeAt = function(i, a, m, E) { return B.call(this, i, a, m, E) }, b.copyNode = function(i) { var a = new F(this, i.start, this.startLoc); for(var m in i) a[m] = i[m]; return a }; var I = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
                            D = I + " Extended_Pictographic",
                            N = D,
                            L = N + " EBase EComp EMod EPres ExtPict",
                            V = L,
                            O = V,
                            R = { 9: I, 10: D, 11: N, 12: L, 13: V, 14: O },
                            U = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji",
                            j = { 9: "", 10: "", 11: "", 12: "", 13: "", 14: U },
                            K = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
                            J = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
                            rt = J + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
                            st = rt + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
                            Z = st + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
                            Q = Z + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
                            $ = Q + " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz",
                            ut = { 9: J, 10: rt, 11: st, 12: Z, 13: Q, 14: $ },
                            at = {};

                        function pt(i) { var a = at[i] = { binary: $t(R[i] + " " + K), binaryOfStrings: $t(j[i]), nonBinary: { General_Category: $t(K), Script: $t(ut[i]) } };
                            a.nonBinary.Script_Extensions = a.nonBinary.Script, a.nonBinary.gc = a.nonBinary.General_Category, a.nonBinary.sc = a.nonBinary.Script, a.nonBinary.scx = a.nonBinary.Script_Extensions } for(var ft = 0, _t = [9, 10, 11, 12, 13, 14]; ft < _t.length; ft += 1) { var wt = _t[ft];
                            pt(wt) } var Y = zt.prototype,
                            Tt = function(a) { this.parser = a, this.validFlags = "gim" + (a.options.ecmaVersion >= 6 ? "uy" : "") + (a.options.ecmaVersion >= 9 ? "s" : "") + (a.options.ecmaVersion >= 13 ? "d" : "") + (a.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = at[a.options.ecmaVersion >= 14 ? 14 : a.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [] };
                        Tt.prototype.reset = function(a, m, E) { var P = E.indexOf("v") !== -1,
                                H = E.indexOf("u") !== -1;
                            this.start = a | 0, this.source = m + "", this.flags = E, P && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = H && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = H && this.parser.options.ecmaVersion >= 9) }, Tt.prototype.raise = function(a) { this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + a) }, Tt.prototype.at = function(a, m) { m === void 0 && (m = !1); var E = this.source,
                                P = E.length; if(a >= P) return -1; var H = E.charCodeAt(a); if(!(m || this.switchU) || H <= 55295 || H >= 57344 || a + 1 >= P) return H; var G = E.charCodeAt(a + 1); return G >= 56320 && G <= 57343 ? (H << 10) + G - 56613888 : H }, Tt.prototype.nextIndex = function(a, m) { m === void 0 && (m = !1); var E = this.source,
                                P = E.length; if(a >= P) return P; var H = E.charCodeAt(a),
                                G; return !(m || this.switchU) || H <= 55295 || H >= 57344 || a + 1 >= P || (G = E.charCodeAt(a + 1)) < 56320 || G > 57343 ? a + 1 : a + 2 }, Tt.prototype.current = function(a) { return a === void 0 && (a = !1), this.at(this.pos, a) }, Tt.prototype.lookahead = function(a) { return a === void 0 && (a = !1), this.at(this.nextIndex(this.pos, a), a) }, Tt.prototype.advance = function(a) { a === void 0 && (a = !1), this.pos = this.nextIndex(this.pos, a) }, Tt.prototype.eat = function(a, m) { return m === void 0 && (m = !1), this.current(m) === a ? (this.advance(m), !0) : !1 }, Tt.prototype.eatChars = function(a, m) { m === void 0 && (m = !1); for(var E = this.pos, P = 0, H = a; P < H.length; P += 1) { var G = H[P],
                                    et = this.at(E, m); if(et === -1 || et !== G) return !1;
                                E = this.nextIndex(E, m) } return this.pos = E, !0 }, Y.validateRegExpFlags = function(i) { for(var a = i.validFlags, m = i.flags, E = !1, P = !1, H = 0; H < m.length; H++) { var G = m.charAt(H);
                                a.indexOf(G) === -1 && this.raise(i.start, "Invalid regular expression flag"), m.indexOf(G, H + 1) > -1 && this.raise(i.start, "Duplicate regular expression flag"), G === "u" && (E = !0), G === "v" && (P = !0) } this.options.ecmaVersion >= 15 && E && P && this.raise(i.start, "Invalid regular expression flag") }, Y.validateRegExpPattern = function(i) { this.regexp_pattern(i), !i.switchN && this.options.ecmaVersion >= 9 && i.groupNames.length > 0 && (i.switchN = !0, this.regexp_pattern(i)) }, Y.regexp_pattern = function(i) { i.pos = 0, i.lastIntValue = 0, i.lastStringValue = "", i.lastAssertionIsQuantifiable = !1, i.numCapturingParens = 0, i.maxBackReference = 0, i.groupNames.length = 0, i.backReferenceNames.length = 0, this.regexp_disjunction(i), i.pos !== i.source.length && (i.eat(41) && i.raise("Unmatched ')'"), (i.eat(93) || i.eat(125)) && i.raise("Lone quantifier brackets")), i.maxBackReference > i.numCapturingParens && i.raise("Invalid escape"); for(var a = 0, m = i.backReferenceNames; a < m.length; a += 1) { var E = m[a];
                                i.groupNames.indexOf(E) === -1 && i.raise("Invalid named capture referenced") } }, Y.regexp_disjunction = function(i) { for(this.regexp_alternative(i); i.eat(124);) this.regexp_alternative(i);
                            this.regexp_eatQuantifier(i, !0) && i.raise("Nothing to repeat"), i.eat(123) && i.raise("Lone quantifier brackets") }, Y.regexp_alternative = function(i) { for(; i.pos < i.source.length && this.regexp_eatTerm(i);); }, Y.regexp_eatTerm = function(i) { return this.regexp_eatAssertion(i) ? (i.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(i) && i.switchU && i.raise("Invalid quantifier"), !0) : (i.switchU ? this.regexp_eatAtom(i) : this.regexp_eatExtendedAtom(i)) ? (this.regexp_eatQuantifier(i), !0) : !1 }, Y.regexp_eatAssertion = function(i) { var a = i.pos; if(i.lastAssertionIsQuantifiable = !1, i.eat(94) || i.eat(36)) return !0; if(i.eat(92)) { if(i.eat(66) || i.eat(98)) return !0;
                                i.pos = a } if(i.eat(40) && i.eat(63)) { var m = !1; if(this.options.ecmaVersion >= 9 && (m = i.eat(60)), i.eat(61) || i.eat(33)) return this.regexp_disjunction(i), i.eat(41) || i.raise("Unterminated group"), i.lastAssertionIsQuantifiable = !m, !0 } return i.pos = a, !1 }, Y.regexp_eatQuantifier = function(i, a) { return a === void 0 && (a = !1), this.regexp_eatQuantifierPrefix(i, a) ? (i.eat(63), !0) : !1 }, Y.regexp_eatQuantifierPrefix = function(i, a) { return i.eat(42) || i.eat(43) || i.eat(63) || this.regexp_eatBracedQuantifier(i, a) }, Y.regexp_eatBracedQuantifier = function(i, a) { var m = i.pos; if(i.eat(123)) { var E = 0,
                                    P = -1; if(this.regexp_eatDecimalDigits(i) && (E = i.lastIntValue, i.eat(44) && this.regexp_eatDecimalDigits(i) && (P = i.lastIntValue), i.eat(125))) return P !== -1 && P < E && !a && i.raise("numbers out of order in {} quantifier"), !0;
                                i.switchU && !a && i.raise("Incomplete quantifier"), i.pos = m } return !1 }, Y.regexp_eatAtom = function(i) { return this.regexp_eatPatternCharacters(i) || i.eat(46) || this.regexp_eatReverseSolidusAtomEscape(i) || this.regexp_eatCharacterClass(i) || this.regexp_eatUncapturingGroup(i) || this.regexp_eatCapturingGroup(i) }, Y.regexp_eatReverseSolidusAtomEscape = function(i) { var a = i.pos; if(i.eat(92)) { if(this.regexp_eatAtomEscape(i)) return !0;
                                i.pos = a } return !1 }, Y.regexp_eatUncapturingGroup = function(i) { var a = i.pos; if(i.eat(40)) { if(i.eat(63) && i.eat(58)) { if(this.regexp_disjunction(i), i.eat(41)) return !0;
                                    i.raise("Unterminated group") } i.pos = a } return !1 }, Y.regexp_eatCapturingGroup = function(i) { if(i.eat(40)) { if(this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(i) : i.current() === 63 && i.raise("Invalid group"), this.regexp_disjunction(i), i.eat(41)) return i.numCapturingParens += 1, !0;
                                i.raise("Unterminated group") } return !1 }, Y.regexp_eatExtendedAtom = function(i) { return i.eat(46) || this.regexp_eatReverseSolidusAtomEscape(i) || this.regexp_eatCharacterClass(i) || this.regexp_eatUncapturingGroup(i) || this.regexp_eatCapturingGroup(i) || this.regexp_eatInvalidBracedQuantifier(i) || this.regexp_eatExtendedPatternCharacter(i) }, Y.regexp_eatInvalidBracedQuantifier = function(i) { return this.regexp_eatBracedQuantifier(i, !0) && i.raise("Nothing to repeat"), !1 }, Y.regexp_eatSyntaxCharacter = function(i) { var a = i.current(); return Xt(a) ? (i.lastIntValue = a, i.advance(), !0) : !1 };

                        function Xt(i) { return i === 36 || i >= 40 && i <= 43 || i === 46 || i === 63 || i >= 91 && i <= 94 || i >= 123 && i <= 125 } Y.regexp_eatPatternCharacters = function(i) { for(var a = i.pos, m = 0;
                                (m = i.current()) !== -1 && !Xt(m);) i.advance(); return i.pos !== a }, Y.regexp_eatExtendedPatternCharacter = function(i) { var a = i.current(); return a !== -1 && a !== 36 && !(a >= 40 && a <= 43) && a !== 46 && a !== 63 && a !== 91 && a !== 94 && a !== 124 ? (i.advance(), !0) : !1 }, Y.regexp_groupSpecifier = function(i) { if(i.eat(63)) { if(this.regexp_eatGroupName(i)) { i.groupNames.indexOf(i.lastStringValue) !== -1 && i.raise("Duplicate capture group name"), i.groupNames.push(i.lastStringValue); return } i.raise("Invalid group") } }, Y.regexp_eatGroupName = function(i) { if(i.lastStringValue = "", i.eat(60)) { if(this.regexp_eatRegExpIdentifierName(i) && i.eat(62)) return !0;
                                i.raise("Invalid capture group name") } return !1 }, Y.regexp_eatRegExpIdentifierName = function(i) { if(i.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(i)) { for(i.lastStringValue += ge(i.lastIntValue); this.regexp_eatRegExpIdentifierPart(i);) i.lastStringValue += ge(i.lastIntValue); return !0 } return !1 }, Y.regexp_eatRegExpIdentifierStart = function(i) { var a = i.pos,
                                m = this.options.ecmaVersion >= 11,
                                E = i.current(m); return i.advance(m), E === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(i, m) && (E = i.lastIntValue), te(E) ? (i.lastIntValue = E, !0) : (i.pos = a, !1) };

                        function te(i) { return de(i, !0) || i === 36 || i === 95 } Y.regexp_eatRegExpIdentifierPart = function(i) { var a = i.pos,
                                m = this.options.ecmaVersion >= 11,
                                E = i.current(m); return i.advance(m), E === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(i, m) && (E = i.lastIntValue), jt(E) ? (i.lastIntValue = E, !0) : (i.pos = a, !1) };

                        function jt(i) { return q(i, !0) || i === 36 || i === 95 || i === 8204 || i === 8205 } Y.regexp_eatAtomEscape = function(i) { return this.regexp_eatBackReference(i) || this.regexp_eatCharacterClassEscape(i) || this.regexp_eatCharacterEscape(i) || i.switchN && this.regexp_eatKGroupName(i) ? !0 : (i.switchU && (i.current() === 99 && i.raise("Invalid unicode escape"), i.raise("Invalid escape")), !1) }, Y.regexp_eatBackReference = function(i) { var a = i.pos; if(this.regexp_eatDecimalEscape(i)) { var m = i.lastIntValue; if(i.switchU) return m > i.maxBackReference && (i.maxBackReference = m), !0; if(m <= i.numCapturingParens) return !0;
                                i.pos = a } return !1 }, Y.regexp_eatKGroupName = function(i) { if(i.eat(107)) { if(this.regexp_eatGroupName(i)) return i.backReferenceNames.push(i.lastStringValue), !0;
                                i.raise("Invalid named reference") } return !1 }, Y.regexp_eatCharacterEscape = function(i) { return this.regexp_eatControlEscape(i) || this.regexp_eatCControlLetter(i) || this.regexp_eatZero(i) || this.regexp_eatHexEscapeSequence(i) || this.regexp_eatRegExpUnicodeEscapeSequence(i, !1) || !i.switchU && this.regexp_eatLegacyOctalEscapeSequence(i) || this.regexp_eatIdentityEscape(i) }, Y.regexp_eatCControlLetter = function(i) { var a = i.pos; if(i.eat(99)) { if(this.regexp_eatControlLetter(i)) return !0;
                                i.pos = a } return !1 }, Y.regexp_eatZero = function(i) { return i.current() === 48 && !ce(i.lookahead()) ? (i.lastIntValue = 0, i.advance(), !0) : !1 }, Y.regexp_eatControlEscape = function(i) { var a = i.current(); return a === 116 ? (i.lastIntValue = 9, i.advance(), !0) : a === 110 ? (i.lastIntValue = 10, i.advance(), !0) : a === 118 ? (i.lastIntValue = 11, i.advance(), !0) : a === 102 ? (i.lastIntValue = 12, i.advance(), !0) : a === 114 ? (i.lastIntValue = 13, i.advance(), !0) : !1 }, Y.regexp_eatControlLetter = function(i) { var a = i.current(); return Pt(a) ? (i.lastIntValue = a % 32, i.advance(), !0) : !1 };

                        function Pt(i) { return i >= 65 && i <= 90 || i >= 97 && i <= 122 } Y.regexp_eatRegExpUnicodeEscapeSequence = function(i, a) { a === void 0 && (a = !1); var m = i.pos,
                                E = a || i.switchU; if(i.eat(117)) { if(this.regexp_eatFixedHexDigits(i, 4)) { var P = i.lastIntValue; if(E && P >= 55296 && P <= 56319) { var H = i.pos; if(i.eat(92) && i.eat(117) && this.regexp_eatFixedHexDigits(i, 4)) { var G = i.lastIntValue; if(G >= 56320 && G <= 57343) return i.lastIntValue = (P - 55296) * 1024 + (G - 56320) + 65536, !0 } i.pos = H, i.lastIntValue = P } return !0 } if(E && i.eat(123) && this.regexp_eatHexDigits(i) && i.eat(125) && Gt(i.lastIntValue)) return !0;
                                E && i.raise("Invalid unicode escape"), i.pos = m } return !1 };

                        function Gt(i) { return i >= 0 && i <= 1114111 } Y.regexp_eatIdentityEscape = function(i) { if(i.switchU) return this.regexp_eatSyntaxCharacter(i) ? !0 : i.eat(47) ? (i.lastIntValue = 47, !0) : !1; var a = i.current(); return a !== 99 && (!i.switchN || a !== 107) ? (i.lastIntValue = a, i.advance(), !0) : !1 }, Y.regexp_eatDecimalEscape = function(i) { i.lastIntValue = 0; var a = i.current(); if(a >= 49 && a <= 57) { do i.lastIntValue = 10 * i.lastIntValue + (a - 48), i.advance(); while((a = i.current()) >= 48 && a <= 57); return !0 } return !1 }; var he = 0,
                            Lt = 1,
                            qt = 2;
                        Y.regexp_eatCharacterClassEscape = function(i) { var a = i.current(); if(Fe(a)) return i.lastIntValue = -1, i.advance(), Lt; var m = !1; if(i.switchU && this.options.ecmaVersion >= 9 && ((m = a === 80) || a === 112)) { i.lastIntValue = -1, i.advance(); var E; if(i.eat(123) && (E = this.regexp_eatUnicodePropertyValueExpression(i)) && i.eat(125)) return m && E === qt && i.raise("Invalid property name"), E;
                                i.raise("Invalid property name") } return he };

                        function Fe(i) { return i === 100 || i === 68 || i === 115 || i === 83 || i === 119 || i === 87 } Y.regexp_eatUnicodePropertyValueExpression = function(i) { var a = i.pos; if(this.regexp_eatUnicodePropertyName(i) && i.eat(61)) { var m = i.lastStringValue; if(this.regexp_eatUnicodePropertyValue(i)) { var E = i.lastStringValue; return this.regexp_validateUnicodePropertyNameAndValue(i, m, E), Lt } } if(i.pos = a, this.regexp_eatLoneUnicodePropertyNameOrValue(i)) { var P = i.lastStringValue; return this.regexp_validateUnicodePropertyNameOrValue(i, P) } return he }, Y.regexp_validateUnicodePropertyNameAndValue = function(i, a, m) { ct(i.unicodeProperties.nonBinary, a) || i.raise("Invalid property name"), i.unicodeProperties.nonBinary[a].test(m) || i.raise("Invalid property value") }, Y.regexp_validateUnicodePropertyNameOrValue = function(i, a) { if(i.unicodeProperties.binary.test(a)) return Lt; if(i.switchV && i.unicodeProperties.binaryOfStrings.test(a)) return qt;
                            i.raise("Invalid property name") }, Y.regexp_eatUnicodePropertyName = function(i) { var a = 0; for(i.lastStringValue = ""; ye(a = i.current());) i.lastStringValue += ge(a), i.advance(); return i.lastStringValue !== "" };

                        function ye(i) { return Pt(i) || i === 95 } Y.regexp_eatUnicodePropertyValue = function(i) { var a = 0; for(i.lastStringValue = ""; Ce(a = i.current());) i.lastStringValue += ge(a), i.advance(); return i.lastStringValue !== "" };

                        function Ce(i) { return ye(i) || ce(i) } Y.regexp_eatLoneUnicodePropertyNameOrValue = function(i) { return this.regexp_eatUnicodePropertyValue(i) }, Y.regexp_eatCharacterClass = function(i) { if(i.eat(91)) { var a = i.eat(94),
                                    m = this.regexp_classContents(i); return i.eat(93) || i.raise("Unterminated character class"), a && m === qt && i.raise("Negated character class may contain strings"), !0 } return !1 }, Y.regexp_classContents = function(i) { return i.current() === 93 ? Lt : i.switchV ? this.regexp_classSetExpression(i) : (this.regexp_nonEmptyClassRanges(i), Lt) }, Y.regexp_nonEmptyClassRanges = function(i) { for(; this.regexp_eatClassAtom(i);) { var a = i.lastIntValue; if(i.eat(45) && this.regexp_eatClassAtom(i)) { var m = i.lastIntValue;
                                    i.switchU && (a === -1 || m === -1) && i.raise("Invalid character class"), a !== -1 && m !== -1 && a > m && i.raise("Range out of order in character class") } } }, Y.regexp_eatClassAtom = function(i) { var a = i.pos; if(i.eat(92)) { if(this.regexp_eatClassEscape(i)) return !0; if(i.switchU) { var m = i.current();
                                    (m === 99 || Ai(m)) && i.raise("Invalid class escape"), i.raise("Invalid escape") } i.pos = a } var E = i.current(); return E !== 93 ? (i.lastIntValue = E, i.advance(), !0) : !1 }, Y.regexp_eatClassEscape = function(i) { var a = i.pos; if(i.eat(98)) return i.lastIntValue = 8, !0; if(i.switchU && i.eat(45)) return i.lastIntValue = 45, !0; if(!i.switchU && i.eat(99)) { if(this.regexp_eatClassControlLetter(i)) return !0;
                                i.pos = a } return this.regexp_eatCharacterClassEscape(i) || this.regexp_eatCharacterEscape(i) }, Y.regexp_classSetExpression = function(i) { var a = Lt,
                                m; if(!this.regexp_eatClassSetRange(i))
                                if(m = this.regexp_eatClassSetOperand(i)) { m === qt && (a = qt); for(var E = i.pos; i.eatChars([38, 38]);) { if(i.current() !== 38 && (m = this.regexp_eatClassSetOperand(i))) { m !== qt && (a = Lt); continue } i.raise("Invalid character in character class") } if(E !== i.pos) return a; for(; i.eatChars([45, 45]);) this.regexp_eatClassSetOperand(i) || i.raise("Invalid character in character class"); if(E !== i.pos) return a } else i.raise("Invalid character in character class"); for(;;)
                                if(!this.regexp_eatClassSetRange(i)) { if(m = this.regexp_eatClassSetOperand(i), !m) return a;
                                    m === qt && (a = qt) } }, Y.regexp_eatClassSetRange = function(i) { var a = i.pos; if(this.regexp_eatClassSetCharacter(i)) { var m = i.lastIntValue; if(i.eat(45) && this.regexp_eatClassSetCharacter(i)) { var E = i.lastIntValue; return m !== -1 && E !== -1 && m > E && i.raise("Range out of order in character class"), !0 } i.pos = a } return !1 }, Y.regexp_eatClassSetOperand = function(i) { return this.regexp_eatClassSetCharacter(i) ? Lt : this.regexp_eatClassStringDisjunction(i) || this.regexp_eatNestedClass(i) }, Y.regexp_eatNestedClass = function(i) { var a = i.pos; if(i.eat(91)) { var m = i.eat(94),
                                    E = this.regexp_classContents(i); if(i.eat(93)) return m && E === qt && i.raise("Negated character class may contain strings"), E;
                                i.pos = a } if(i.eat(92)) { var P = this.regexp_eatCharacterClassEscape(i); if(P) return P;
                                i.pos = a } return null }, Y.regexp_eatClassStringDisjunction = function(i) { var a = i.pos; if(i.eatChars([92, 113])) { if(i.eat(123)) { var m = this.regexp_classStringDisjunctionContents(i); if(i.eat(125)) return m } else i.raise("Invalid escape");
                                i.pos = a } return null }, Y.regexp_classStringDisjunctionContents = function(i) { for(var a = this.regexp_classString(i); i.eat(124);) this.regexp_classString(i) === qt && (a = qt); return a }, Y.regexp_classString = function(i) { for(var a = 0; this.regexp_eatClassSetCharacter(i);) a++; return a === 1 ? Lt : qt }, Y.regexp_eatClassSetCharacter = function(i) { var a = i.pos; if(i.eat(92)) return this.regexp_eatCharacterEscape(i) || this.regexp_eatClassSetReservedPunctuator(i) ? !0 : i.eat(98) ? (i.lastIntValue = 8, !0) : (i.pos = a, !1); var m = i.current(); return m < 0 || m === i.lookahead() && fe(m) || _e(m) ? !1 : (i.advance(), i.lastIntValue = m, !0) };

                        function fe(i) { return i === 33 || i >= 35 && i <= 38 || i >= 42 && i <= 44 || i === 46 || i >= 58 && i <= 64 || i === 94 || i === 96 || i === 126 }

                        function _e(i) { return i === 40 || i === 41 || i === 45 || i === 47 || i >= 91 && i <= 93 || i >= 123 && i <= 125 } Y.regexp_eatClassSetReservedPunctuator = function(i) { var a = i.current(); return ke(a) ? (i.lastIntValue = a, i.advance(), !0) : !1 };

                        function ke(i) { return i === 33 || i === 35 || i === 37 || i === 38 || i === 44 || i === 45 || i >= 58 && i <= 62 || i === 64 || i === 96 || i === 126 } Y.regexp_eatClassControlLetter = function(i) { var a = i.current(); return ce(a) || a === 95 ? (i.lastIntValue = a % 32, i.advance(), !0) : !1 }, Y.regexp_eatHexEscapeSequence = function(i) { var a = i.pos; if(i.eat(120)) { if(this.regexp_eatFixedHexDigits(i, 2)) return !0;
                                i.switchU && i.raise("Invalid escape"), i.pos = a } return !1 }, Y.regexp_eatDecimalDigits = function(i) { var a = i.pos,
                                m = 0; for(i.lastIntValue = 0; ce(m = i.current());) i.lastIntValue = 10 * i.lastIntValue + (m - 48), i.advance(); return i.pos !== a };

                        function ce(i) { return i >= 48 && i <= 57 } Y.regexp_eatHexDigits = function(i) { var a = i.pos,
                                m = 0; for(i.lastIntValue = 0; We(m = i.current());) i.lastIntValue = 16 * i.lastIntValue + xi(m), i.advance(); return i.pos !== a };

                        function We(i) { return i >= 48 && i <= 57 || i >= 65 && i <= 70 || i >= 97 && i <= 102 }

                        function xi(i) { return i >= 65 && i <= 70 ? 10 + (i - 65) : i >= 97 && i <= 102 ? 10 + (i - 97) : i - 48 } Y.regexp_eatLegacyOctalEscapeSequence = function(i) { if(this.regexp_eatOctalDigit(i)) { var a = i.lastIntValue; if(this.regexp_eatOctalDigit(i)) { var m = i.lastIntValue;
                                    a <= 3 && this.regexp_eatOctalDigit(i) ? i.lastIntValue = a * 64 + m * 8 + i.lastIntValue : i.lastIntValue = a * 8 + m } else i.lastIntValue = a; return !0 } return !1 }, Y.regexp_eatOctalDigit = function(i) { var a = i.current(); return Ai(a) ? (i.lastIntValue = a - 48, i.advance(), !0) : (i.lastIntValue = 0, !1) };

                        function Ai(i) { return i >= 48 && i <= 55 } Y.regexp_eatFixedHexDigits = function(i, a) { var m = i.pos;
                            i.lastIntValue = 0; for(var E = 0; E < a; ++E) { var P = i.current(); if(!We(P)) return i.pos = m, !1;
                                i.lastIntValue = 16 * i.lastIntValue + xi(P), i.advance() } return !0 }; var Ze = function(a) { this.type = a.type, this.value = a.value, this.start = a.start, this.end = a.end, a.options.locations && (this.loc = new Ne(a, a.startLoc, a.endLoc)), a.options.ranges && (this.range = [a.start, a.end]) },
                            bt = zt.prototype;
                        bt.next = function(i) {!i && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Ze(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken() }, bt.getToken = function() { return this.next(), new Ze(this) }, typeof Symbol < "u" && (bt[Symbol.iterator] = function() { var i = this; return { next: function() { var a = i.getToken(); return { done: a.type === k.eof, value: a } } } }), bt.nextToken = function() { var i = this.curContext(); if((!i || !i.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length) return this.finishToken(k.eof); if(i.override) return i.override(this);
                            this.readToken(this.fullCharCodeAtPos()) }, bt.readToken = function(i) { return de(i, this.options.ecmaVersion >= 6) || i === 92 ? this.readWord() : this.getTokenFromCode(i) }, bt.fullCharCodeAtPos = function() { var i = this.input.charCodeAt(this.pos); if(i <= 55295 || i >= 56320) return i; var a = this.input.charCodeAt(this.pos + 1); return a <= 56319 || a >= 57344 ? i : (i << 10) + a - 56613888 }, bt.skipBlockComment = function() { var i = this.options.onComment && this.curPosition(),
                                a = this.pos,
                                m = this.input.indexOf("*/", this.pos += 2); if(m === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = m + 2, this.options.locations)
                                for(var E = void 0, P = a;
                                    (E = Oe(this.input, P, this.pos)) > -1;) ++this.curLine, P = this.lineStart = E;
                            this.options.onComment && this.options.onComment(!0, this.input.slice(a + 2, m), a, this.pos, i, this.curPosition()) }, bt.skipLineComment = function(i) { for(var a = this.pos, m = this.options.onComment && this.curPosition(), E = this.input.charCodeAt(this.pos += i); this.pos < this.input.length && !ae(E);) E = this.input.charCodeAt(++this.pos);
                            this.options.onComment && this.options.onComment(!1, this.input.slice(a + i, this.pos), a, this.pos, m, this.curPosition()) }, bt.skipSpace = function() { t: for(; this.pos < this.input.length;) { var i = this.input.charCodeAt(this.pos); switch (i) {
                                    case 32:
                                    case 160:
                                        ++this.pos; break;
                                    case 13:
                                        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
                                    case 10:
                                    case 8232:
                                    case 8233:
                                        ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos); break;
                                    case 47:
                                        switch (this.input.charCodeAt(this.pos + 1)) {
                                            case 42:
                                                this.skipBlockComment(); break;
                                            case 47:
                                                this.skipLineComment(2); break;
                                            default:
                                                break t } break;
                                    default:
                                        if(i > 8 && i < 14 || i >= 5760 && ue.test(String.fromCharCode(i))) ++this.pos;
                                        else break t } } }, bt.finishToken = function(i, a) { this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition()); var m = this.type;
                            this.type = i, this.value = a, this.updateContext(m) }, bt.readToken_dot = function() { var i = this.input.charCodeAt(this.pos + 1); if(i >= 48 && i <= 57) return this.readNumber(!0); var a = this.input.charCodeAt(this.pos + 2); return this.options.ecmaVersion >= 6 && i === 46 && a === 46 ? (this.pos += 3, this.finishToken(k.ellipsis)) : (++this.pos, this.finishToken(k.dot)) }, bt.readToken_slash = function() { var i = this.input.charCodeAt(this.pos + 1); return this.exprAllowed ? (++this.pos, this.readRegexp()) : i === 61 ? this.finishOp(k.assign, 2) : this.finishOp(k.slash, 1) }, bt.readToken_mult_modulo_exp = function(i) { var a = this.input.charCodeAt(this.pos + 1),
                                m = 1,
                                E = i === 42 ? k.star : k.modulo; return this.options.ecmaVersion >= 7 && i === 42 && a === 42 && (++m, E = k.starstar, a = this.input.charCodeAt(this.pos + 2)), a === 61 ? this.finishOp(k.assign, m + 1) : this.finishOp(E, m) }, bt.readToken_pipe_amp = function(i) { var a = this.input.charCodeAt(this.pos + 1); if(a === i) { if(this.options.ecmaVersion >= 12) { var m = this.input.charCodeAt(this.pos + 2); if(m === 61) return this.finishOp(k.assign, 3) } return this.finishOp(i === 124 ? k.logicalOR : k.logicalAND, 2) } return a === 61 ? this.finishOp(k.assign, 2) : this.finishOp(i === 124 ? k.bitwiseOR : k.bitwiseAND, 1) }, bt.readToken_caret = function() { var i = this.input.charCodeAt(this.pos + 1); return i === 61 ? this.finishOp(k.assign, 2) : this.finishOp(k.bitwiseXOR, 1) }, bt.readToken_plus_min = function(i) { var a = this.input.charCodeAt(this.pos + 1); return a === i ? a === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || ie.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(k.incDec, 2) : a === 61 ? this.finishOp(k.assign, 2) : this.finishOp(k.plusMin, 1) }, bt.readToken_lt_gt = function(i) { var a = this.input.charCodeAt(this.pos + 1),
                                m = 1; return a === i ? (m = i === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + m) === 61 ? this.finishOp(k.assign, m + 1) : this.finishOp(k.bitShift, m)) : a === 33 && i === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (a === 61 && (m = 2), this.finishOp(k.relational, m)) }, bt.readToken_eq_excl = function(i) { var a = this.input.charCodeAt(this.pos + 1); return a === 61 ? this.finishOp(k.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : i === 61 && a === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(k.arrow)) : this.finishOp(i === 61 ? k.eq : k.prefix, 1) }, bt.readToken_question = function() { var i = this.options.ecmaVersion; if(i >= 11) { var a = this.input.charCodeAt(this.pos + 1); if(a === 46) { var m = this.input.charCodeAt(this.pos + 2); if(m < 48 || m > 57) return this.finishOp(k.questionDot, 2) } if(a === 63) { if(i >= 12) { var E = this.input.charCodeAt(this.pos + 2); if(E === 61) return this.finishOp(k.assign, 3) } return this.finishOp(k.coalesce, 2) } } return this.finishOp(k.question, 1) }, bt.readToken_numberSign = function() { var i = this.options.ecmaVersion,
                                a = 35; if(i >= 13 && (++this.pos, a = this.fullCharCodeAtPos(), de(a, !0) || a === 92)) return this.finishToken(k.privateId, this.readWord1());
                            this.raise(this.pos, "Unexpected character '" + ge(a) + "'") }, bt.getTokenFromCode = function(i) { switch (i) {
                                case 46:
                                    return this.readToken_dot();
                                case 40:
                                    return ++this.pos, this.finishToken(k.parenL);
                                case 41:
                                    return ++this.pos, this.finishToken(k.parenR);
                                case 59:
                                    return ++this.pos, this.finishToken(k.semi);
                                case 44:
                                    return ++this.pos, this.finishToken(k.comma);
                                case 91:
                                    return ++this.pos, this.finishToken(k.bracketL);
                                case 93:
                                    return ++this.pos, this.finishToken(k.bracketR);
                                case 123:
                                    return ++this.pos, this.finishToken(k.braceL);
                                case 125:
                                    return ++this.pos, this.finishToken(k.braceR);
                                case 58:
                                    return ++this.pos, this.finishToken(k.colon);
                                case 96:
                                    if(this.options.ecmaVersion < 6) break; return ++this.pos, this.finishToken(k.backQuote);
                                case 48:
                                    var a = this.input.charCodeAt(this.pos + 1); if(a === 120 || a === 88) return this.readRadixNumber(16); if(this.options.ecmaVersion >= 6) { if(a === 111 || a === 79) return this.readRadixNumber(8); if(a === 98 || a === 66) return this.readRadixNumber(2) }
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    return this.readNumber(!1);
                                case 34:
                                case 39:
                                    return this.readString(i);
                                case 47:
                                    return this.readToken_slash();
                                case 37:
                                case 42:
                                    return this.readToken_mult_modulo_exp(i);
                                case 124:
                                case 38:
                                    return this.readToken_pipe_amp(i);
                                case 94:
                                    return this.readToken_caret();
                                case 43:
                                case 45:
                                    return this.readToken_plus_min(i);
                                case 60:
                                case 62:
                                    return this.readToken_lt_gt(i);
                                case 61:
                                case 33:
                                    return this.readToken_eq_excl(i);
                                case 63:
                                    return this.readToken_question();
                                case 126:
                                    return this.finishOp(k.prefix, 1);
                                case 35:
                                    return this.readToken_numberSign() } this.raise(this.pos, "Unexpected character '" + ge(i) + "'") }, bt.finishOp = function(i, a) { var m = this.input.slice(this.pos, this.pos + a); return this.pos += a, this.finishToken(i, m) }, bt.readRegexp = function() { for(var i, a, m = this.pos;;) { this.pos >= this.input.length && this.raise(m, "Unterminated regular expression"); var E = this.input.charAt(this.pos); if(ie.test(E) && this.raise(m, "Unterminated regular expression"), i) i = !1;
                                else { if(E === "[") a = !0;
                                    else if(E === "]" && a) a = !1;
                                    else if(E === "/" && !a) break;
                                    i = E === "\\" }++this.pos } var P = this.input.slice(m, this.pos);++this.pos; var H = this.pos,
                                G = this.readWord1();
                            this.containsEsc && this.unexpected(H); var et = this.regexpState || (this.regexpState = new Tt(this));
                            et.reset(m, P, G), this.validateRegExpFlags(et), this.validateRegExpPattern(et); var nt = null; try { nt = new RegExp(P, G) } catch {} return this.finishToken(k.regexp, { pattern: P, flags: G, value: nt }) }, bt.readInt = function(i, a, m) { for(var E = this.options.ecmaVersion >= 12 && a === void 0, P = m && this.input.charCodeAt(this.pos) === 48, H = this.pos, G = 0, et = 0, nt = 0, vt = a ? ? 1 / 0; nt < vt; ++nt, ++this.pos) { var St = this.input.charCodeAt(this.pos),
                                    Qt = void 0; if(E && St === 95) { P && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), et === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), nt === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), et = St; continue } if(St >= 97 ? Qt = St - 97 + 10 : St >= 65 ? Qt = St - 65 + 10 : St >= 48 && St <= 57 ? Qt = St - 48 : Qt = 1 / 0, Qt >= i) break;
                                et = St, G = G * i + Qt } return E && et === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === H || a != null && this.pos - H !== a ? null : G };

                        function Ti(i, a) { return a ? parseInt(i, 8) : parseFloat(i.replace(/_/g, "")) }

                        function Ke(i) { return typeof BigInt != "function" ? null : BigInt(i.replace(/_/g, "")) } bt.readRadixNumber = function(i) { var a = this.pos;
                            this.pos += 2; var m = this.readInt(i); return m == null && this.raise(this.start + 2, "Expected number in radix " + i), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (m = Ke(this.input.slice(a, this.pos)), ++this.pos) : de(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(k.num, m) }, bt.readNumber = function(i) { var a = this.pos;!i && this.readInt(10, void 0, !0) === null && this.raise(a, "Invalid number"); var m = this.pos - a >= 2 && this.input.charCodeAt(a) === 48;
                            m && this.strict && this.raise(a, "Invalid number"); var E = this.input.charCodeAt(this.pos); if(!m && !i && this.options.ecmaVersion >= 11 && E === 110) { var P = Ke(this.input.slice(a, this.pos)); return ++this.pos, de(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(k.num, P) } m && /[89]/.test(this.input.slice(a, this.pos)) && (m = !1), E === 46 && !m && (++this.pos, this.readInt(10), E = this.input.charCodeAt(this.pos)), (E === 69 || E === 101) && !m && (E = this.input.charCodeAt(++this.pos), (E === 43 || E === 45) && ++this.pos, this.readInt(10) === null && this.raise(a, "Invalid number")), de(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"); var H = Ti(this.input.slice(a, this.pos), m); return this.finishToken(k.num, H) }, bt.readCodePoint = function() { var i = this.input.charCodeAt(this.pos),
                                a; if(i === 123) { this.options.ecmaVersion < 6 && this.unexpected(); var m = ++this.pos;
                                a = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, a > 1114111 && this.invalidStringToken(m, "Code point out of bounds") } else a = this.readHexChar(4); return a }, bt.readString = function(i) { for(var a = "", m = ++this.pos;;) { this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant"); var E = this.input.charCodeAt(this.pos); if(E === i) break;
                                E === 92 ? (a += this.input.slice(m, this.pos), a += this.readEscapedChar(!1), m = this.pos) : E === 8232 || E === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (ae(E) && this.raise(this.start, "Unterminated string constant"), ++this.pos) } return a += this.input.slice(m, this.pos++), this.finishToken(k.string, a) }; var li = {};
                        bt.tryReadTemplateToken = function() { this.inTemplateElement = !0; try { this.readTmplToken() } catch (i) { if(i === li) this.readInvalidTemplateToken();
                                else throw i } this.inTemplateElement = !1 }, bt.invalidStringToken = function(i, a) { if(this.inTemplateElement && this.options.ecmaVersion >= 9) throw li;
                            this.raise(i, a) }, bt.readTmplToken = function() { for(var i = "", a = this.pos;;) { this.pos >= this.input.length && this.raise(this.start, "Unterminated template"); var m = this.input.charCodeAt(this.pos); if(m === 96 || m === 36 && this.input.charCodeAt(this.pos + 1) === 123) return this.pos === this.start && (this.type === k.template || this.type === k.invalidTemplate) ? m === 36 ? (this.pos += 2, this.finishToken(k.dollarBraceL)) : (++this.pos, this.finishToken(k.backQuote)) : (i += this.input.slice(a, this.pos), this.finishToken(k.template, i)); if(m === 92) i += this.input.slice(a, this.pos), i += this.readEscapedChar(!0), a = this.pos;
                                else if(ae(m)) { switch (i += this.input.slice(a, this.pos), ++this.pos, m) {
                                        case 13:
                                            this.input.charCodeAt(this.pos) === 10 && ++this.pos;
                                        case 10:
                                            i += `
`; break;
                                        default:
                                            i += String.fromCharCode(m); break } this.options.locations && (++this.curLine, this.lineStart = this.pos), a = this.pos } else ++this.pos } }, bt.readInvalidTemplateToken = function() { for(; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
                                case "\\":
                                    ++this.pos; break;
                                case "$":
                                    if(this.input[this.pos + 1] !== "{") break;
                                case "`":
                                    return this.finishToken(k.invalidTemplate, this.input.slice(this.start, this.pos)) } this.raise(this.start, "Unterminated template") }, bt.readEscapedChar = function(i) { var a = this.input.charCodeAt(++this.pos); switch (++this.pos, a) {
                                case 110:
                                    return `
`;
                                case 114:
                                    return "\r";
                                case 120:
                                    return String.fromCharCode(this.readHexChar(2));
                                case 117:
                                    return ge(this.readCodePoint());
                                case 116:
                                    return "    ";
                                case 98:
                                    return "\b";
                                case 118:
                                    return "\v";
                                case 102:
                                    return "\f";
                                case 13:
                                    this.input.charCodeAt(this.pos) === 10 && ++this.pos;
                                case 10:
                                    return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
                                case 56:
                                case 57:
                                    if(this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), i) { var m = this.pos - 1;
                                        this.invalidStringToken(m, "Invalid escape sequence in template string") }
                                default:
                                    if(a >= 48 && a <= 55) { var E = this.input.substr(this.pos - 1, 3)
                                            .match(/^[0-7]+/)[0],
                                            P = parseInt(E, 8); return P > 255 && (E = E.slice(0, -1), P = parseInt(E, 8)), this.pos += E.length - 1, a = this.input.charCodeAt(this.pos), (E !== "0" || a === 56 || a === 57) && (this.strict || i) && this.invalidStringToken(this.pos - 1 - E.length, i ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(P) } return ae(a) ? "" : String.fromCharCode(a) } }, bt.readHexChar = function(i) { var a = this.pos,
                                m = this.readInt(16, i); return m === null && this.invalidStringToken(a, "Bad character escape sequence"), m }, bt.readWord1 = function() { this.containsEsc = !1; for(var i = "", a = !0, m = this.pos, E = this.options.ecmaVersion >= 6; this.pos < this.input.length;) { var P = this.fullCharCodeAtPos(); if(q(P, E)) this.pos += P <= 65535 ? 1 : 2;
                                else if(P === 92) { this.containsEsc = !0, i += this.input.slice(m, this.pos); var H = this.pos;
                                    this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos; var G = this.readCodePoint();
                                    (a ? de : q)(G, E) || this.invalidStringToken(H, "Invalid Unicode escape"), i += ge(G), m = this.pos } else break;
                                a = !1 } return i + this.input.slice(m, this.pos) }, bt.readWord = function() { var i = this.readWord1(),
                                a = k.name; return this.keywords.test(i) && (a = ni[i]), this.finishToken(a, i) }; var Xe = "8.11.2";
                        zt.acorn = { Parser: zt, version: Xe, defaultOptions: Ie, Position: oe, SourceLocation: Ne, getLineInfo: mi, Node: F, TokenType: xt, tokTypes: k, keywordTypes: ni, TokContext: p, tokContexts: x, isIdentifierChar: q, isIdentifierStart: de, Token: Ze, isNewLine: ae, lineBreak: ie, lineBreakG: Ct, nonASCIIwhitespace: ue };

                        function fi(i, a) { return zt.parse(i, a) }

                        function Re(i, a, m) { return zt.parseExpressionAt(i, a, m) }

                        function De(i, a) { return zt.tokenizer(i, a) } Et.Node = F, Et.Parser = zt, Et.Position = oe, Et.SourceLocation = Ne, Et.TokContext = p, Et.Token = Ze, Et.TokenType = xt, Et.defaultOptions = Ie, Et.getLineInfo = mi, Et.isIdentifierChar = q, Et.isIdentifierStart = de, Et.isNewLine = ae, Et.keywordTypes = ni, Et.lineBreak = ie, Et.lineBreakG = Ct, Et.nonASCIIwhitespace = ue, Et.parse = fi, Et.parseExpressionAt = Re, Et.tokContexts = x, Et.tokTypes = k, Et.tokenizer = De, Et.version = Xe }) } }),
            Ar = _i({ "(disabled):node_modules/paper/dist/node/extend.js"() {} }),
            br = _i({ "node_modules/paper/dist/paper-full.js"(Nt, Mt) { var Et = function(Ht, tt) { Ht = Ht || wr(), Ht.navigator = navigator; var Ot = Ht.window,
                            kt = Ht.document,
                            M = new function() { var t = /^(statics|enumerable|beans|preserve)$/,
                                    e = [],
                                    r = e.slice,
                                    n = Object.create,
                                    s = Object.getOwnPropertyDescriptor,
                                    u = Object.defineProperty,
                                    h = e.forEach || function(d, p) { for(var x = 0, y = this.length; x < y; x++) d.call(p, this[x], x, this) },
                                    o = function(d, p) { for(var x in this) this.hasOwnProperty(x) && d.call(p, this[x], x, this) },
                                    l = Object.assign || function(d) { for(var p = 1, x = arguments.length; p < x; p++) { var y = arguments[p]; for(var w in y) y.hasOwnProperty(w) && (d[w] = y[w]) } return d },
                                    f = function(d, p, x) { if(d) { var y = s(d, "length");
                                            (y && typeof y.value == "number" ? h : o)
                                            .call(d, p, x = x || d) } return x };

                                function g(d, p, x, y, w) { var _ = {};

                                    function A(b, B) { B = B || (B = s(p, b)) && (B.get ? B : B.value), typeof B == "string" && B[0] === "#" && (B = d[B.substring(1)] || B); var I = typeof B == "function",
                                            D = B,
                                            N = w || I && !B.base ? B && B.get ? b in d : d[b] : null,
                                            L;
                                        (!w || !N) && (I && N && (B.base = N), I && y !== !1 && (L = b.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (_[L[3].toLowerCase() + L[4]] = L[2]), (!D || I || !D.get || typeof D.get != "function" || !v.isPlainObject(D)) && (D = { value: D, writable: !0 }), (s(d, b) || { configurable: !0 })
                                            .configurable && (D.configurable = !0, D.enumerable = x ? ? !L), u(d, b, D)) } if(p) { for(var c in p) p.hasOwnProperty(c) && !t.test(c) && A(c); for(var c in _) { var C = _[c],
                                                S = d["set" + C],
                                                F = d["get" + C] || S && d["is" + C];
                                            F && (y === !0 || F.length === 0) && A(c, { get: F, set: S }) } } return d }

                                function v() { for(var d = 0, p = arguments.length; d < p; d++) { var x = arguments[d];
                                        x && l(this, x) } return this } return g(v, { inject: function(d) { if(d) { var p = d.statics === !0 ? d : d.statics,
                                                    x = d.beans,
                                                    y = d.preserve;
                                                p !== d && g(this.prototype, d, d.enumerable, x, y), g(this, p, null, x, y) } for(var w = 1, _ = arguments.length; w < _; w++) this.inject(arguments[w]); return this }, extend: function() { for(var d = this, p, x, y = 0, w, _ = arguments.length; y < _ && !(p && x); y++) w = arguments[y], p = p || w.initialize, x = x || w.prototype; return p = p || function() { d.apply(this, arguments) }, x = p.prototype = x || n(this.prototype), u(x, "constructor", { value: p, writable: !0, configurable: !0 }), g(p, this), arguments.length && this.inject.apply(p, arguments), p.base = d, p } })
                                    .inject({ enumerable: !1, initialize: v, set: v, inject: function() { for(var d = 0, p = arguments.length; d < p; d++) { var x = arguments[d];
                                                x && g(this, x, x.enumerable, x.beans, x.preserve) } return this }, extend: function() { var d = n(this); return d.inject.apply(d, arguments) }, each: function(d, p) { return f(this, d, p) }, clone: function() { return new this.constructor(this) }, statics: { set: l, each: f, create: n, define: u, describe: s, clone: function(d) { return l(new d.constructor, d) }, isPlainObject: function(d) { var p = d != null && d.constructor; return p && (p === Object || p === v || p.name === "Object") }, pick: function(d, p) { return d !== tt ? d : p }, slice: function(d, p, x) { return r.call(d, p, x) } } }) };
                        typeof Mt < "u" && (Mt.exports = M), M.inject({ enumerable: !1, toString: function() { return this._id != null ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + M.each(this, function(t, e) { if(!/^_/.test(e)) { var r = typeof t;
                                            this.push(e + ": " + (r === "number" ? me.instance.number(t) : r === "string" ? "'" + t + "'" : t)) } }, [])
                                    .join(", ") + " }" }, getClassName: function() { return this._class || "" }, importJSON: function(t) { return M.importJSON(t, this) }, exportJSON: function(t) { return M.exportJSON(this, t) }, toJSON: function() { return M.serialize(this) }, set: function(t, e) { return t && M.filter(this, t, e, this._prioritize), this } }, { beans: !1, statics: { exports: {}, extend: function t() { var e = t.base.apply(this, arguments),
                                        r = e.prototype._class; return r && !M.exports[r] && (M.exports[r] = e), e }, equals: function(t, e) { if(t === e) return !0; if(t && t.equals) return t.equals(e); if(e && e.equals) return e.equals(t); if(t && e && typeof t == "object" && typeof e == "object") { if(Array.isArray(t) && Array.isArray(e)) { var r = t.length; if(r !== e.length) return !1; for(; r--;)
                                                if(!M.equals(t[r], e[r])) return !1 } else { var n = Object.keys(t),
                                                r = n.length; if(r !== Object.keys(e)
                                                .length) return !1; for(; r--;) { var s = n[r]; if(!(e.hasOwnProperty(s) && M.equals(t[s], e[s]))) return !1 } } return !0 } return !1 }, read: function(t, e, r, n) { if(this === M) { var s = this.peek(t, e); return t.__index++, s } var u = this.prototype,
                                        h = u._readIndex,
                                        o = e || h && t.__index || 0,
                                        l = t.length,
                                        f = t[o]; if(n = n || l - o, f instanceof this || r && r.readNull && f == null && n <= 1) return h && (t.__index = o + 1), f && r && r.clone ? f.clone() : f; if(f = M.create(u), h && (f.__read = !0), f = f.initialize.apply(f, o > 0 || o + n < l ? M.slice(t, o, o + n) : t) || f, h) { t.__index = o + f.__read; var g = f.__filtered;
                                        g && (t.__filtered = g, f.__filtered = tt), f.__read = tt } return f }, peek: function(t, e) { return t[t.__index = e || t.__index || 0] }, remain: function(t) { return t.length - (t.__index || 0) }, readList: function(t, e, r, n) { for(var s = [], u, h = e || 0, o = n ? h + n : t.length, l = h; l < o; l++) s.push(Array.isArray(u = t[l]) ? this.read(u, 0, r) : this.read(t, l, r, 1)); return s }, readNamed: function(t, e, r, n, s) { var u = this.getNamed(t, e),
                                        h = u !== tt; if(h) { var o = t.__filtered; if(!o) { var l = this.getSource(t);
                                            o = t.__filtered = M.create(l), o.__unfiltered = l } o[e] = tt } return this.read(h ? [u] : t, r, n, s) }, readSupported: function(t, e) { var r = this.getSource(t),
                                        n = this,
                                        s = !1; return r && Object.keys(r)
                                        .forEach(function(u) { if(u in e) { var h = n.readNamed(t, u);
                                                h !== tt && (e[u] = h), s = !0 } }), s }, getSource: function(t) { var e = t.__source; if(e === tt) { var r = t.length === 1 && t[0];
                                        e = t.__source = r && M.isPlainObject(r) ? r : null } return e }, getNamed: function(t, e) { var r = this.getSource(t); if(r) return e ? r[e] : t.__filtered || r }, hasNamed: function(t, e) { return !!this.getNamed(t, e) }, filter: function(t, e, r, n) { var s;

                                    function u(g) { if(!(r && g in r) && !(s && g in s)) { var v = e[g];
                                            v !== tt && (t[g] = v) } } if(n) { for(var h = {}, o = 0, l, f = n.length; o < f; o++)(l = n[o]) in e && (u(l), h[l] = !0);
                                        s = h } return Object.keys(e.__unfiltered || e)
                                        .forEach(u), t }, isPlainValue: function(t, e) { return M.isPlainObject(t) || Array.isArray(t) || e && typeof t == "string" }, serialize: function(t, e, r, n) { e = e || {}; var s = !n,
                                        u; if(s && (e.formatter = new me(e.precision), n = { length: 0, definitions: {}, references: {}, add: function(v, d) { var p = "#" + v._id,
                                                    x = this.references[p]; if(!x) { this.length++; var y = d.call(v),
                                                        w = v._class;
                                                    w && y[0] !== w && y.unshift(w), this.definitions[p] = y, x = this.references[p] = [p] } return x } }), t && t._serialize) { u = t._serialize(e, n); var h = t._class;
                                        h && !t._compactSerialize && (s || !r) && u[0] !== h && u.unshift(h) } else if(Array.isArray(t)) { u = []; for(var o = 0, l = t.length; o < l; o++) u[o] = M.serialize(t[o], e, r, n) } else if(M.isPlainObject(t)) { u = {}; for(var f = Object.keys(t), o = 0, l = f.length; o < l; o++) { var g = f[o];
                                            u[g] = M.serialize(t[g], e, r, n) } } else typeof t == "number" ? u = e.formatter.number(t, e.precision) : u = t; return s && n.length > 0 ? [
                                        ["dictionary", n.definitions], u
                                    ] : u }, deserialize: function(t, e, r, n, s) { var u = t,
                                        h = !r,
                                        o = h && t && t.length && t[0][0] === "dictionary"; if(r = r || {}, Array.isArray(t)) { var l = t[0],
                                            f = l === "dictionary"; if(t.length == 1 && /^#/.test(l)) return r.dictionary[l];
                                        l = M.exports[l], u = []; for(var g = l ? 1 : 0, v = t.length; g < v; g++) u.push(M.deserialize(t[g], e, r, f, o)); if(l) { var d = u;
                                            e ? u = e(l, d, h || s) : u = new l(d) } } else if(M.isPlainObject(t)) { u = {}, n && (r.dictionary = u); for(var p in t) u[p] = M.deserialize(t[p], e, r) } return o ? u[1] : u }, exportJSON: function(t, e) { var r = M.serialize(t, e); return e && e.asString == !1 ? r : JSON.stringify(r) }, importJSON: function(t, e) { return M.deserialize(typeof t == "string" ? JSON.parse(t) : t, function(r, n, s) { var u = s && e && e.constructor === r,
                                            h = u ? e : M.create(r.prototype); if(n.length === 1 && h instanceof Ct && (u || !(h instanceof Oe))) { var o = n[0];
                                            M.isPlainObject(o) && (o.insert = !1, u && (n = n.concat([Ct.INSERT]))) } return (u ? h.set : r)
                                            .apply(h, n), u && (e = null), h }) }, push: function(t, e) { var r = e.length; if(r < 4096) t.push.apply(t, e);
                                    else { var n = t.length;
                                        t.length += r; for(var s = 0; s < r; s++) t[n + s] = e[s] } return t }, splice: function(t, e, r, n) { var s = e && e.length,
                                        u = r === tt;
                                    r = u ? t.length : r, r > t.length && (r = t.length); for(var h = 0; h < s; h++) e[h]._index = r + h; if(u) return M.push(t, e), []; var o = [r, n];
                                    e && M.push(o, e); for(var l = t.splice.apply(t, o), h = 0, f = l.length; h < f; h++) l[h]._index = tt; for(var h = r + s, f = t.length; h < f; h++) t[h]._index = h; return l }, capitalize: function(t) { return t.replace(/\b[a-z]/g, function(e) { return e.toUpperCase() }) }, camelize: function(t) { return t.replace(/-(.)/g, function(e, r) { return r.toUpperCase() }) }, hyphenate: function(t) { return t.replace(/([a-z])([A-Z])/g, "$1-$2")
                                        .toLowerCase() } } }); var Le = { on: function(t, e) { if(typeof t != "string") M.each(t, function(u, h) { this.on(h, u) }, this);
                                    else { var r = this._eventTypes,
                                            n = r && r[t],
                                            s = this._callbacks = this._callbacks || {};
                                        s = s[t] = s[t] || [], s.indexOf(e) === -1 && (s.push(e), n && n.install && s.length === 1 && n.install.call(this, t)) } return this }, off: function(t, e) { if(typeof t != "string") { M.each(t, function(h, o) { this.off(o, h) }, this); return } var r = this._eventTypes,
                                        n = r && r[t],
                                        s = this._callbacks && this._callbacks[t],
                                        u; return s && (!e || (u = s.indexOf(e)) !== -1 && s.length === 1 ? (n && n.uninstall && n.uninstall.call(this, t), delete this._callbacks[t]) : u !== -1 && s.splice(u, 1)), this }, once: function(t, e) { return this.on(t, function r() { e.apply(this, arguments), this.off(t, r) }) }, emit: function(t, e) { var r = this._callbacks && this._callbacks[t]; if(!r) return !1; var n = M.slice(arguments, 1),
                                        s = e && e.target && !e.currentTarget;
                                    r = r.slice(), s && (e.currentTarget = this); for(var u = 0, h = r.length; u < h; u++)
                                        if(r[u].apply(this, n) == !1) { e && e.stop && e.stop(); break } return s && delete e.currentTarget, !0 }, responds: function(t) { return !!(this._callbacks && this._callbacks[t]) }, attach: "#on", detach: "#off", fire: "#emit", _installEvents: function(t) { var e = this._eventTypes,
                                        r = this._callbacks,
                                        n = t ? "install" : "uninstall"; if(e) { for(var s in r)
                                            if(r[s].length > 0) { var u = e[s],
                                                    h = u && u[n];
                                                h && h.call(this, s) } } }, statics: { inject: function t(e) { var r = e._events; if(r) { var n = {};
                                            M.each(r, function(s, u) { var h = typeof s == "string",
                                                    o = h ? s : u,
                                                    l = M.capitalize(o),
                                                    f = o.substring(2)
                                                    .toLowerCase();
                                                n[f] = h ? {} : s, o = "_" + o, e["get" + l] = function() { return this[o] }, e["set" + l] = function(g) { var v = this[o];
                                                    v && this.off(f, v), g && this.on(f, g), this[o] = g } }), e._eventTypes = n } return t.base.apply(this, arguments) } } },
                            ve = M.extend({ _class: "PaperScope", initialize: function t() { dt = this, this.settings = new M({ applyMatrix: !0, insertItems: !0, handleSize: 4, hitTolerance: 0 }), this.project = null, this.projects = [], this.tools = [], this._id = t._id++, t._scopes[this._id] = this; var e = t.prototype; if(!this.support) { var r = Kt.getContext(1, 1) || {};
                                        e.support = { nativeDash: "setLineDash" in r || "mozDash" in r, nativeBlendModes: hi.nativeModes }, Kt.release(r) } if(!this.agent) { var n = Ht.navigator.userAgent.toLowerCase(),
                                            s = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(n) || [])[0],
                                            u = s === "darwin" ? "mac" : s,
                                            h = e.agent = e.browser = { platform: u };
                                        u && (h[u] = !0), n.replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node|jsdom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g, function(o, l, f, g, v) { if(!h.chrome) { var d = l === "opera" ? g : /^(node|trident)$/.test(l) ? v : f;
                                                h.version = d, h.versionNumber = parseFloat(d), l = { trident: "msie", jsdom: "node" } [l] || l, h.name = l, h[l] = !0 } }), h.chrome && delete h.webkit, h.atom && delete h.chrome } }, version: "0.12.17", getView: function() { var t = this.project; return t && t._view }, getPaper: function() { return this }, execute: function(t, e) { var r = dt.PaperScript.execute(t, this, e); return Rt.updateFocus(), r }, install: function(t) { var e = this;
                                    M.each(["project", "view", "tool"], function(n) { M.define(t, n, { configurable: !0, get: function() { return e[n] } }) }); for(var r in this) !/^_/.test(r) && this[r] && (t[r] = this[r]) }, setup: function(t) { return dt = this, this.project = new ie(t), this }, createCanvas: function(t, e) { return Kt.getCanvas(t, e) }, activate: function() { dt = this }, clear: function() { for(var t = this.projects, e = this.tools, r = t.length - 1; r >= 0; r--) t[r].remove(); for(var r = e.length - 1; r >= 0; r--) e[r].remove() }, remove: function() { this.clear(), delete ve._scopes[this._id] }, statics: new function() {
                                    function t(e) { return e += "Attribute",
                                            function(r, n) { return r[e](n) || r[e]("data-paper-" + n) } } return { _scopes: {}, _id: 0, get: function(e) { return this._scopes[e] || null }, getAttribute: t("get"), hasAttribute: t("has") } } }),
                            ii = M.extend(Le, { initialize: function(t) { this._scope = dt, this._index = this._scope[this._list].push(this) - 1, (t || !this._scope[this._reference]) && this.activate() }, activate: function() { if(!this._scope) return !1; var t = this._scope[this._reference]; return t && t !== this && t.emit("deactivate"), this._scope[this._reference] = this, this.emit("activate", t), !0 }, isActive: function() { return this._scope[this._reference] === this }, remove: function() { return this._index == null ? !1 : (M.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), this._scope = null, !0) }, getView: function() { return this._scope.getView() } }),
                            ri = { findItemBoundsCollisions: function(t, e, r) {
                                    function n(h) { for(var o = new Array(h.length), l = 0; l < h.length; l++) { var f = h[l].getBounds();
                                            o[l] = [f.left, f.top, f.right, f.bottom] } return o } var s = n(t),
                                        u = !e || e === t ? s : n(e); return this.findBoundsCollisions(s, u, r || 0) }, findCurveBoundsCollisions: function(t, e, r, n) {
                                    function s(d) { for(var p = Math.min, x = Math.max, y = new Array(d.length), w = 0; w < d.length; w++) { var _ = d[w];
                                            y[w] = [p(_[0], _[2], _[4], _[6]), p(_[1], _[3], _[5], _[7]), x(_[0], _[2], _[4], _[6]), x(_[1], _[3], _[5], _[7])] } return y } var u = s(t),
                                        h = !e || e === t ? u : s(e); if(n) { for(var o = this.findBoundsCollisions(u, h, r || 0, !1, !0), l = this.findBoundsCollisions(u, h, r || 0, !0, !0), f = [], g = 0, v = o.length; g < v; g++) f[g] = { hor: o[g], ver: l[g] }; return f } return this.findBoundsCollisions(u, h, r || 0) }, findBoundsCollisions: function(t, e, r, n, s) { var u = !e || t === e,
                                        h = u ? t : t.concat(e),
                                        o = t.length,
                                        l = h.length;

                                    function f(J, rt, st) { for(var Z = 0, Q = J.length; Z < Q;) { var $ = Q + Z >>> 1;
                                            h[J[$]][rt] < st ? Z = $ + 1 : Q = $ } return Z - 1 } for(var g = n ? 1 : 0, v = g + 2, d = n ? 0 : 1, p = d + 2, x = new Array(l), y = 0; y < l; y++) x[y] = y;
                                    x.sort(function(J, rt) { return h[J][g] - h[rt][g] }); for(var w = [], _ = new Array(o), y = 0; y < l; y++) { var A = x[y],
                                            c = h[A],
                                            C = u ? A : A - o,
                                            S = A < o,
                                            F = u || !S,
                                            b = S ? [] : null; if(w.length) { var B = f(w, v, c[g] - r) + 1; if(w.splice(0, B), u && s) { b = b.concat(w); for(var I = 0; I < w.length; I++) { var D = w[I];
                                                    _[D].push(C) } } else
                                                for(var N = c[p], L = c[d], I = 0; I < w.length; I++) { var D = w[I],
                                                        V = h[D],
                                                        O = D < o,
                                                        R = u || D >= o;
                                                    (s || (S && R || F && O) && N >= V[d] - r && L <= V[p] + r) && (S && R && b.push(u ? D : D - o), F && O && _[D].push(C)) } } if(S && (t === e && b.push(A), _[A] = b), w.length) { var U = c[v],
                                                j = f(w, v, U);
                                            w.splice(j + 1, 0, A) } else w.push(A) } for(var y = 0; y < _.length; y++) { var K = _[y];
                                        K && K.sort(function(rt, st) { return rt - st }) } return _ } },
                            me = M.extend({ initialize: function(t) { this.precision = M.pick(t, 5), this.multiplier = Math.pow(10, this.precision) }, number: function(t) { return this.precision < 16 ? Math.round(t * this.multiplier) / this.multiplier : t }, pair: function(t, e, r) { return this.number(t) + (r || ",") + this.number(e) }, point: function(t, e) { return this.number(t.x) + (e || ",") + this.number(t.y) }, size: function(t, e) { return this.number(t.width) + (e || ",") + this.number(t.height) }, rectangle: function(t, e) { return this.point(t, e) + (e || ",") + this.size(t, e) } });
                        me.instance = new me; var Ft = new function() { var t = [
                                        [.5773502691896257],
                                        [0, .7745966692414834],
                                        [.33998104358485626, .8611363115940526],
                                        [0, .5384693101056831, .906179845938664],
                                        [.2386191860831969, .6612093864662645, .932469514203152],
                                        [0, .4058451513773972, .7415311855993945, .9491079123427585],
                                        [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363],
                                        [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261],
                                        [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717],
                                        [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057],
                                        [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192],
                                        [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881],
                                        [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123],
                                        [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854],
                                        [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]
                                    ],
                                    e = [
                                        [1],
                                        [.8888888888888888, .5555555555555556],
                                        [.6521451548625461, .34785484513745385],
                                        [.5688888888888889, .47862867049936647, .23692688505618908],
                                        [.46791393457269104, .3607615730481386, .17132449237917036],
                                        [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697],
                                        [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626],
                                        [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441],
                                        [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814],
                                        [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366],
                                        [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183],
                                        [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588],
                                        [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186],
                                        [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727],
                                        [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]
                                    ],
                                    r = Math.abs,
                                    n = Math.sqrt,
                                    s = Math.pow,
                                    u = Math.log2 || function(v) { return Math.log(v) * Math.LOG2E },
                                    h = 1e-12,
                                    o = 112e-18;

                                function l(v, d, p) { return v < d ? d : v > p ? p : v }

                                function f(v, d, p) {
                                    function x(B) { var I = B * 134217729,
                                            D = B - I,
                                            N = D + I,
                                            L = B - N; return [N, L] } var y = d * d - v * p,
                                        w = d * d + v * p; if(r(y) * 3 < w) { var _ = x(v),
                                            A = x(d),
                                            c = x(p),
                                            C = d * d,
                                            S = A[0] * A[0] - C + 2 * A[0] * A[1] + A[1] * A[1],
                                            F = v * p,
                                            b = _[0] * c[0] - F + _[0] * c[1] + _[1] * c[0] + _[1] * c[1];
                                        y = C - F + (S - b) } return y }

                                function g() { var v = Math.max.apply(Math, arguments); return v && (v < 1e-8 || v > 1e8) ? s(2, -Math.round(u(v))) : 0 } return { EPSILON: h, MACHINE_EPSILON: o, CURVETIME_EPSILON: 1e-8, GEOMETRIC_EPSILON: 1e-7, TRIGONOMETRIC_EPSILON: 1e-8, ANGULAR_EPSILON: 1e-5, KAPPA: 4 * (n(2) - 1) / 3, isZero: function(v) { return v >= -h && v <= h }, isMachineZero: function(v) { return v >= -o && v <= o }, clamp: l, integrate: function(v, d, p, x) { for(var y = t[x - 2], w = e[x - 2], _ = (p - d) * .5, A = _ + d, c = 0, C = x + 1 >> 1, S = x & 1 ? w[c++] * v(A) : 0; c < C;) { var F = _ * y[c];
                                            S += w[c++] * (v(A + F) + v(A - F)) } return _ * S }, findRoot: function(v, d, p, x, y, w, _) { for(var A = 0; A < w; A++) { var c = v(p),
                                                C = c / d(p),
                                                S = p - C; if(r(C) < _) { p = S; break } c > 0 ? (y = p, p = S <= x ? (x + y) * .5 : S) : (x = p, p = S >= y ? (x + y) * .5 : S) } return l(p, x, y) }, solveQuadratic: function(v, d, p, x, y, w) { var _, A = 1 / 0; if(r(v) < h) { if(r(d) < h) return r(p) < h ? -1 : 0;
                                            _ = -p / d } else { d *= -.5; var c = f(v, d, p); if(c && r(c) < o) { var C = g(r(v), r(d), r(p));
                                                C && (v *= C, d *= C, p *= C, c = f(v, d, p)) } if(c >= -o) { var S = c < 0 ? 0 : n(c),
                                                    F = d + (d < 0 ? -S : S);
                                                F === 0 ? (_ = p / v, A = -_) : (_ = F / v, A = p / F) } } var b = 0,
                                            B = y == null,
                                            I = y - h,
                                            D = w + h; return isFinite(_) && (B || _ > I && _ < D) && (x[b++] = B ? _ : l(_, y, w)), A !== _ && isFinite(A) && (B || A > I && A < D) && (x[b++] = B ? A : l(A, y, w)), b }, solveCubic: function(v, d, p, x, y, w, _) { var A = g(r(v), r(d), r(p), r(x)),
                                            c, C, S, F, b;
                                        A && (v *= A, d *= A, p *= A, x *= A);

                                        function B(j) { c = j; var K = v * c;
                                            C = K + d, S = C * c + p, F = (K + C) * c + S, b = S * c + x } if(r(v) < h) v = d, C = p, S = x, c = 1 / 0;
                                        else if(r(x) < h) C = d, S = p, c = 0;
                                        else { B(-(d / v) / 3); var I = b / v,
                                                D = s(r(I), 1 / 3),
                                                N = I < 0 ? -1 : 1,
                                                L = -F / v,
                                                V = L > 0 ? 1.324717957244746 * Math.max(D, n(L)) : D,
                                                O = c - N * V; if(O !== c) { do B(O), O = F === 0 ? c : c - b / F / (1 + o); while(N * O > N * c);
                                                r(v) * c * c > r(x / c) && (S = -x / c, C = (S - p) / c) } } var R = Ft.solveQuadratic(v, C, S, y, w, _),
                                            U = w == null; return isFinite(c) && (R === 0 || R > 0 && c !== y[0] && c !== y[1]) && (U || c > w - h && c < _ + h) && (y[R++] = U ? c : l(c, w, _)), R } } },
                            de = { _id: 1, _pools: {}, get: function(t) { if(t) { var e = this._pools[t]; return e || (e = this._pools[t] = { _id: 1 }), e._id++ } else return this._id++ } },
                            q = M.extend({ _class: "Point", _readIndex: !0, initialize: function(e, r) { var n = typeof e,
                                        s = this.__read,
                                        u = 0; if(n === "number") { var h = typeof r == "number";
                                        this._set(e, h ? r : e), s && (u = h ? 2 : 1) } else if(n === "undefined" || e === null) this._set(0, 0), s && (u = e === null ? 1 : 0);
                                    else { var o = n === "string" ? e.split(/[\s,]+/) || [] : e;
                                        u = 1, Array.isArray(o) ? this._set(+o[0], +(o.length > 1 ? o[1] : o[0])) : "x" in o ? this._set(o.x || 0, o.y || 0) : "width" in o ? this._set(o.width || 0, o.height || 0) : "angle" in o ? (this._set(o.length || 0, 0), this.setAngle(o.angle || 0)) : (this._set(0, 0), u = 0) } return s && (this.__read = u), this }, set: "#initialize", _set: function(t, e) { return this.x = t, this.y = e, this }, equals: function(t) { return this === t || t && (this.x === t.x && this.y === t.y || Array.isArray(t) && this.x === t[0] && this.y === t[1]) || !1 }, clone: function() { return new q(this.x, this.y) }, toString: function() { var t = me.instance; return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }" }, _serialize: function(t) { var e = t.formatter; return [e.number(this.x), e.number(this.y)] }, getLength: function() { return Math.sqrt(this.x * this.x + this.y * this.y) }, setLength: function(t) { if(this.isZero()) { var e = this._angle || 0;
                                        this._set(Math.cos(e) * t, Math.sin(e) * t) } else { var r = t / this.getLength();
                                        Ft.isZero(r) && this.getAngle(), this._set(this.x * r, this.y * r) } }, getAngle: function() { return this.getAngleInRadians.apply(this, arguments) * 180 / Math.PI }, setAngle: function(t) { this.setAngleInRadians.call(this, t * Math.PI / 180) }, getAngleInDegrees: "#getAngle", setAngleInDegrees: "#setAngle", getAngleInRadians: function() { if(arguments.length) { var t = q.read(arguments),
                                            e = this.getLength() * t.getLength(); if(Ft.isZero(e)) return NaN; var r = this.dot(t) / e; return Math.acos(r < -1 ? -1 : r > 1 ? 1 : r) } else return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x) }, setAngleInRadians: function(t) { if(this._angle = t, !this.isZero()) { var e = this.getLength();
                                        this._set(Math.cos(t) * e, Math.sin(t) * e) } }, getQuadrant: function() { return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3 } }, { beans: !1, getDirectedAngle: function() { var t = q.read(arguments); return Math.atan2(this.cross(t), this.dot(t)) * 180 / Math.PI }, getDistance: function() { var t = arguments,
                                        e = q.read(t),
                                        r = e.x - this.x,
                                        n = e.y - this.y,
                                        s = r * r + n * n,
                                        u = M.read(t); return u ? s : Math.sqrt(s) }, normalize: function(t) { t === tt && (t = 1); var e = this.getLength(),
                                        r = e !== 0 ? t / e : 0,
                                        n = new q(this.x * r, this.y * r); return r >= 0 && (n._angle = this._angle), n }, rotate: function(t, e) { if(t === 0) return this.clone();
                                    t = t * Math.PI / 180; var r = e ? this.subtract(e) : this,
                                        n = Math.sin(t),
                                        s = Math.cos(t); return r = new q(r.x * s - r.y * n, r.x * n + r.y * s), e ? r.add(e) : r }, transform: function(t) { return t ? t._transformPoint(this) : this }, add: function() { var t = q.read(arguments); return new q(this.x + t.x, this.y + t.y) }, subtract: function() { var t = q.read(arguments); return new q(this.x - t.x, this.y - t.y) }, multiply: function() { var t = q.read(arguments); return new q(this.x * t.x, this.y * t.y) }, divide: function() { var t = q.read(arguments); return new q(this.x / t.x, this.y / t.y) }, modulo: function() { var t = q.read(arguments); return new q(this.x % t.x, this.y % t.y) }, negate: function() { return new q(-this.x, -this.y) }, isInside: function() { return ht.read(arguments)
                                        .contains(this) }, isClose: function() { var t = arguments,
                                        e = q.read(t),
                                        r = M.read(t); return this.getDistance(e) <= r }, isCollinear: function() { var t = q.read(arguments); return q.isCollinear(this.x, this.y, t.x, t.y) }, isColinear: "#isCollinear", isOrthogonal: function() { var t = q.read(arguments); return q.isOrthogonal(this.x, this.y, t.x, t.y) }, isZero: function() { var t = Ft.isZero; return t(this.x) && t(this.y) }, isNaN: function() { return isNaN(this.x) || isNaN(this.y) }, isInQuadrant: function(t) { return this.x * (t > 1 && t < 4 ? -1 : 1) >= 0 && this.y * (t > 2 ? -1 : 1) >= 0 }, dot: function() { var t = q.read(arguments); return this.x * t.x + this.y * t.y }, cross: function() { var t = q.read(arguments); return this.x * t.y - this.y * t.x }, project: function() { var t = q.read(arguments),
                                        e = t.isZero() ? 0 : this.dot(t) / t.dot(t); return new q(t.x * e, t.y * e) }, statics: { min: function() { var t = arguments,
                                            e = q.read(t),
                                            r = q.read(t); return new q(Math.min(e.x, r.x), Math.min(e.y, r.y)) }, max: function() { var t = arguments,
                                            e = q.read(t),
                                            r = q.read(t); return new q(Math.max(e.x, r.x), Math.max(e.y, r.y)) }, random: function() { return new q(Math.random(), Math.random()) }, isCollinear: function(t, e, r, n) { return Math.abs(t * n - e * r) <= Math.sqrt((t * t + e * e) * (r * r + n * n)) * 1e-8 }, isOrthogonal: function(t, e, r, n) { return Math.abs(t * r + e * n) <= Math.sqrt((t * t + e * e) * (r * r + n * n)) * 1e-8 } } }, M.each(["round", "ceil", "floor", "abs"], function(t) { var e = Math[t];
                                this[t] = function() { return new q(e(this.x), e(this.y)) } }, {})),
                            xt = q.extend({ initialize: function(e, r, n, s) { this._x = e, this._y = r, this._owner = n, this._setter = s }, _set: function(t, e, r) { return this._x = t, this._y = e, r || this._owner[this._setter](this), this }, getX: function() { return this._x }, setX: function(t) { this._x = t, this._owner[this._setter](this) }, getY: function() { return this._y }, setY: function(t) { this._y = t, this._owner[this._setter](this) }, isSelected: function() { return !!(this._owner._selection & this._getSelection()) }, setSelected: function(t) { this._owner._changeSelection(this._getSelection(), t) }, _getSelection: function() { return this._setter === "setPosition" ? 4 : 0 } }),
                            ot = M.extend({ _class: "Size", _readIndex: !0, initialize: function(e, r) { var n = typeof e,
                                        s = this.__read,
                                        u = 0; if(n === "number") { var h = typeof r == "number";
                                        this._set(e, h ? r : e), s && (u = h ? 2 : 1) } else if(n === "undefined" || e === null) this._set(0, 0), s && (u = e === null ? 1 : 0);
                                    else { var o = n === "string" ? e.split(/[\s,]+/) || [] : e;
                                        u = 1, Array.isArray(o) ? this._set(+o[0], +(o.length > 1 ? o[1] : o[0])) : "width" in o ? this._set(o.width || 0, o.height || 0) : "x" in o ? this._set(o.x || 0, o.y || 0) : (this._set(0, 0), u = 0) } return s && (this.__read = u), this }, set: "#initialize", _set: function(t, e) { return this.width = t, this.height = e, this }, equals: function(t) { return t === this || t && (this.width === t.width && this.height === t.height || Array.isArray(t) && this.width === t[0] && this.height === t[1]) || !1 }, clone: function() { return new ot(this.width, this.height) }, toString: function() { var t = me.instance; return "{ width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }" }, _serialize: function(t) { var e = t.formatter; return [e.number(this.width), e.number(this.height)] }, add: function() { var t = ot.read(arguments); return new ot(this.width + t.width, this.height + t.height) }, subtract: function() { var t = ot.read(arguments); return new ot(this.width - t.width, this.height - t.height) }, multiply: function() { var t = ot.read(arguments); return new ot(this.width * t.width, this.height * t.height) }, divide: function() { var t = ot.read(arguments); return new ot(this.width / t.width, this.height / t.height) }, modulo: function() { var t = ot.read(arguments); return new ot(this.width % t.width, this.height % t.height) }, negate: function() { return new ot(-this.width, -this.height) }, isZero: function() { var t = Ft.isZero; return t(this.width) && t(this.height) }, isNaN: function() { return isNaN(this.width) || isNaN(this.height) }, statics: { min: function(t, e) { return new ot(Math.min(t.width, e.width), Math.min(t.height, e.height)) }, max: function(t, e) { return new ot(Math.max(t.width, e.width), Math.max(t.height, e.height)) }, random: function() { return new ot(Math.random(), Math.random()) } } }, M.each(["round", "ceil", "floor", "abs"], function(t) { var e = Math[t];
                                this[t] = function() { return new ot(e(this.width), e(this.height)) } }, {})),
                            ee = ot.extend({ initialize: function(e, r, n, s) { this._width = e, this._height = r, this._owner = n, this._setter = s }, _set: function(t, e, r) { return this._width = t, this._height = e, r || this._owner[this._setter](this), this }, getWidth: function() { return this._width }, setWidth: function(t) { this._width = t, this._owner[this._setter](this) }, getHeight: function() { return this._height }, setHeight: function(t) { this._height = t, this._owner[this._setter](this) } }),
                            ht = M.extend({ _class: "Rectangle", _readIndex: !0, beans: !0, initialize: function(e, r, n, s) { var u = arguments,
                                        h = typeof e,
                                        o; if(h === "number" ? (this._set(e, r, n, s), o = 4) : h === "undefined" || e === null ? (this._set(0, 0, 0, 0), o = e === null ? 1 : 0) : u.length === 1 && (Array.isArray(e) ? (this._set.apply(this, e), o = 1) : e.x !== tt || e.width !== tt ? (this._set(e.x || 0, e.y || 0, e.width || 0, e.height || 0), o = 1) : e.from === tt && e.to === tt && (this._set(0, 0, 0, 0), M.readSupported(u, this) && (o = 1))), o === tt) { var l = q.readNamed(u, "from"),
                                            f = M.peek(u),
                                            g = l.x,
                                            v = l.y,
                                            d, p; if(f && f.x !== tt || M.hasNamed(u, "to")) { var x = q.readNamed(u, "to");
                                            d = x.x - g, p = x.y - v, d < 0 && (g = x.x, d = -d), p < 0 && (v = x.y, p = -p) } else { var y = ot.read(u);
                                            d = y.width, p = y.height } this._set(g, v, d, p), o = u.__index } var w = u.__filtered; return w && (this.__filtered = w), this.__read && (this.__read = o), this }, set: "#initialize", _set: function(t, e, r, n) { return this.x = t, this.y = e, this.width = r, this.height = n, this }, clone: function() { return new ht(this.x, this.y, this.width, this.height) }, equals: function(t) { var e = M.isPlainValue(t) ? ht.read(arguments) : t; return e === this || e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height || !1 }, toString: function() { var t = me.instance; return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + ", width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }" }, _serialize: function(t) { var e = t.formatter; return [e.number(this.x), e.number(this.y), e.number(this.width), e.number(this.height)] }, getPoint: function(t) { var e = t ? q : xt; return new e(this.x, this.y, this, "setPoint") }, setPoint: function() { var t = q.read(arguments);
                                    this.x = t.x, this.y = t.y }, getSize: function(t) { var e = t ? ot : ee; return new e(this.width, this.height, this, "setSize") }, _fw: 1, _fh: 1, setSize: function() { var t = ot.read(arguments),
                                        e = this._sx,
                                        r = this._sy,
                                        n = t.width,
                                        s = t.height;
                                    e && (this.x += (this.width - n) * e), r && (this.y += (this.height - s) * r), this.width = n, this.height = s, this._fw = this._fh = 1 }, getLeft: function() { return this.x }, setLeft: function(t) { if(!this._fw) { var e = t - this.x;
                                        this.width -= this._sx === .5 ? e * 2 : e } this.x = t, this._sx = this._fw = 0 }, getTop: function() { return this.y }, setTop: function(t) { if(!this._fh) { var e = t - this.y;
                                        this.height -= this._sy === .5 ? e * 2 : e } this.y = t, this._sy = this._fh = 0 }, getRight: function() { return this.x + this.width }, setRight: function(t) { if(!this._fw) { var e = t - this.x;
                                        this.width = this._sx === .5 ? e * 2 : e } this.x = t - this.width, this._sx = 1, this._fw = 0 }, getBottom: function() { return this.y + this.height }, setBottom: function(t) { if(!this._fh) { var e = t - this.y;
                                        this.height = this._sy === .5 ? e * 2 : e } this.y = t - this.height, this._sy = 1, this._fh = 0 }, getCenterX: function() { return this.x + this.width / 2 }, setCenterX: function(t) { this._fw || this._sx === .5 ? this.x = t - this.width / 2 : (this._sx && (this.x += (t - this.x) * 2 * this._sx), this.width = (t - this.x) * 2), this._sx = .5, this._fw = 0 }, getCenterY: function() { return this.y + this.height / 2 }, setCenterY: function(t) { this._fh || this._sy === .5 ? this.y = t - this.height / 2 : (this._sy && (this.y += (t - this.y) * 2 * this._sy), this.height = (t - this.y) * 2), this._sy = .5, this._fh = 0 }, getCenter: function(t) { var e = t ? q : xt; return new e(this.getCenterX(), this.getCenterY(), this, "setCenter") }, setCenter: function() { var t = q.read(arguments); return this.setCenterX(t.x), this.setCenterY(t.y), this }, getArea: function() { return this.width * this.height }, isEmpty: function() { return this.width === 0 || this.height === 0 }, contains: function(t) { return t && t.width !== tt || (Array.isArray(t) ? t : arguments)
                                        .length === 4 ? this._containsRectangle(ht.read(arguments)) : this._containsPoint(q.read(arguments)) }, _containsPoint: function(t) { var e = t.x,
                                        r = t.y; return e >= this.x && r >= this.y && e <= this.x + this.width && r <= this.y + this.height }, _containsRectangle: function(t) { var e = t.x,
                                        r = t.y; return e >= this.x && r >= this.y && e + t.width <= this.x + this.width && r + t.height <= this.y + this.height }, intersects: function() { var t = ht.read(arguments),
                                        e = M.read(arguments) || 0; return t.x + t.width > this.x - e && t.y + t.height > this.y - e && t.x < this.x + this.width + e && t.y < this.y + this.height + e }, intersect: function() { var t = ht.read(arguments),
                                        e = Math.max(this.x, t.x),
                                        r = Math.max(this.y, t.y),
                                        n = Math.min(this.x + this.width, t.x + t.width),
                                        s = Math.min(this.y + this.height, t.y + t.height); return new ht(e, r, n - e, s - r) }, unite: function() { var t = ht.read(arguments),
                                        e = Math.min(this.x, t.x),
                                        r = Math.min(this.y, t.y),
                                        n = Math.max(this.x + this.width, t.x + t.width),
                                        s = Math.max(this.y + this.height, t.y + t.height); return new ht(e, r, n - e, s - r) }, include: function() { var t = q.read(arguments),
                                        e = Math.min(this.x, t.x),
                                        r = Math.min(this.y, t.y),
                                        n = Math.max(this.x + this.width, t.x),
                                        s = Math.max(this.y + this.height, t.y); return new ht(e, r, n - e, s - r) }, expand: function() { var t = ot.read(arguments),
                                        e = t.width,
                                        r = t.height; return new ht(this.x - e / 2, this.y - r / 2, this.width + e, this.height + r) }, scale: function(t, e) { return this.expand(this.width * t - this.width, this.height * (e === tt ? t : e) - this.height) } }, M.each([
                                ["Top", "Left"],
                                ["Top", "Right"],
                                ["Bottom", "Left"],
                                ["Bottom", "Right"],
                                ["Left", "Center"],
                                ["Top", "Center"],
                                ["Right", "Center"],
                                ["Bottom", "Center"]
                            ], function(t, e) { var r = t.join(""),
                                    n = /^[RL]/.test(r);
                                e >= 4 && (t[1] += n ? "Y" : "X"); var s = t[n ? 0 : 1],
                                    u = t[n ? 1 : 0],
                                    h = "get" + s,
                                    o = "get" + u,
                                    l = "set" + s,
                                    f = "set" + u,
                                    g = "get" + r,
                                    v = "set" + r;
                                this[g] = function(d) { var p = d ? q : xt; return new p(this[h](), this[o](), this, v) }, this[v] = function() { var d = q.read(arguments);
                                    this[l](d.x), this[f](d.y) } }, { beans: !0 })),
                            ni = ht.extend({ initialize: function(e, r, n, s, u, h) { this._set(e, r, n, s, !0), this._owner = u, this._setter = h }, _set: function(t, e, r, n, s) { return this._x = t, this._y = e, this._width = r, this._height = n, s || this._owner[this._setter](this), this } }, new function() { var t = ht.prototype; return M.each(["x", "y", "width", "height"], function(e) { var r = M.capitalize(e),
                                        n = "_" + e;
                                    this["get" + r] = function() { return this[n] }, this["set" + r] = function(s) { this[n] = s, this._dontNotify || this._owner[this._setter](this) } }, M.each(["Point", "Size", "Center", "Left", "Top", "Right", "Bottom", "CenterX", "CenterY", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], function(e) { var r = "set" + e;
                                    this[r] = function() { this._dontNotify = !0, t[r].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this) } }, { isSelected: function() { return !!(this._owner._selection & 2) }, setSelected: function(e) { var r = this._owner;
                                        r._changeSelection && r._changeSelection(2, e) } })) }),
                            lt = M.extend({ _class: "Matrix", initialize: function t(e, r) { var n = arguments,
                                        s = n.length,
                                        u = !0; if(s >= 6 ? this._set.apply(this, n) : s === 1 || s === 2 ? e instanceof t ? this._set(e._a, e._b, e._c, e._d, e._tx, e._ty, r) : Array.isArray(e) ? this._set.apply(this, r ? e.concat([r]) : e) : u = !1 : s ? u = !1 : this.reset(), !u) throw new Error("Unsupported matrix parameters"); return this }, set: "#initialize", _set: function(t, e, r, n, s, u, h) { return this._a = t, this._b = e, this._c = r, this._d = n, this._tx = s, this._ty = u, h || this._changed(), this }, _serialize: function(t, e) { return M.serialize(this.getValues(), t, !0, e) }, _changed: function() { var t = this._owner;
                                    t && (t._applyMatrix ? t.transform(null, !0) : t._changed(25)) }, clone: function() { return new lt(this._a, this._b, this._c, this._d, this._tx, this._ty) }, equals: function(t) { return t === this || t && this._a === t._a && this._b === t._b && this._c === t._c && this._d === t._d && this._tx === t._tx && this._ty === t._ty }, toString: function() { var t = me.instance; return "[[" + [t.number(this._a), t.number(this._c), t.number(this._tx)].join(", ") + "], [" + [t.number(this._b), t.number(this._d), t.number(this._ty)].join(", ") + "]]" }, reset: function(t) { return this._a = this._d = 1, this._b = this._c = this._tx = this._ty = 0, t || this._changed(), this }, apply: function(t, e) { var r = this._owner; return r ? (r.transform(null, M.pick(t, !0), e), this.isIdentity()) : !1 }, translate: function() { var t = q.read(arguments),
                                        e = t.x,
                                        r = t.y; return this._tx += e * this._a + r * this._c, this._ty += e * this._b + r * this._d, this._changed(), this }, scale: function() { var t = arguments,
                                        e = q.read(t),
                                        r = q.read(t, 0, { readNull: !0 }); return r && this.translate(r), this._a *= e.x, this._b *= e.x, this._c *= e.y, this._d *= e.y, r && this.translate(r.negate()), this._changed(), this }, rotate: function(t) { t *= Math.PI / 180; var e = q.read(arguments, 1),
                                        r = e.x,
                                        n = e.y,
                                        s = Math.cos(t),
                                        u = Math.sin(t),
                                        h = r - r * s + n * u,
                                        o = n - r * u - n * s,
                                        l = this._a,
                                        f = this._b,
                                        g = this._c,
                                        v = this._d; return this._a = s * l + u * g, this._b = s * f + u * v, this._c = -u * l + s * g, this._d = -u * f + s * v, this._tx += h * l + o * g, this._ty += h * f + o * v, this._changed(), this }, shear: function() { var t = arguments,
                                        e = q.read(t),
                                        r = q.read(t, 0, { readNull: !0 });
                                    r && this.translate(r); var n = this._a,
                                        s = this._b; return this._a += e.y * this._c, this._b += e.y * this._d, this._c += e.x * n, this._d += e.x * s, r && this.translate(r.negate()), this._changed(), this }, skew: function() { var t = arguments,
                                        e = q.read(t),
                                        r = q.read(t, 0, { readNull: !0 }),
                                        n = Math.PI / 180,
                                        s = new q(Math.tan(e.x * n), Math.tan(e.y * n)); return this.shear(s, r) }, append: function(t, e) { if(t) { var r = this._a,
                                            n = this._b,
                                            s = this._c,
                                            u = this._d,
                                            h = t._a,
                                            o = t._c,
                                            l = t._b,
                                            f = t._d,
                                            g = t._tx,
                                            v = t._ty;
                                        this._a = h * r + l * s, this._c = o * r + f * s, this._b = h * n + l * u, this._d = o * n + f * u, this._tx += g * r + v * s, this._ty += g * n + v * u, e || this._changed() } return this }, prepend: function(t, e) { if(t) { var r = this._a,
                                            n = this._b,
                                            s = this._c,
                                            u = this._d,
                                            h = this._tx,
                                            o = this._ty,
                                            l = t._a,
                                            f = t._c,
                                            g = t._b,
                                            v = t._d,
                                            d = t._tx,
                                            p = t._ty;
                                        this._a = l * r + f * n, this._c = l * s + f * u, this._b = g * r + v * n, this._d = g * s + v * u, this._tx = l * h + f * o + d, this._ty = g * h + v * o + p, e || this._changed() } return this }, appended: function(t) { return this.clone()
                                        .append(t) }, prepended: function(t) { return this.clone()
                                        .prepend(t) }, invert: function() { var t = this._a,
                                        e = this._b,
                                        r = this._c,
                                        n = this._d,
                                        s = this._tx,
                                        u = this._ty,
                                        h = t * n - e * r,
                                        o = null; return h && !isNaN(h) && isFinite(s) && isFinite(u) && (this._a = n / h, this._b = -e / h, this._c = -r / h, this._d = t / h, this._tx = (r * u - n * s) / h, this._ty = (e * s - t * u) / h, o = this), o }, inverted: function() { return this.clone()
                                        .invert() }, concatenate: "#append", preConcatenate: "#prepend", chain: "#appended", _shiftless: function() { return new lt(this._a, this._b, this._c, this._d, 0, 0) }, _orNullIfIdentity: function() { return this.isIdentity() ? null : this }, isIdentity: function() { return this._a === 1 && this._b === 0 && this._c === 0 && this._d === 1 && this._tx === 0 && this._ty === 0 }, isInvertible: function() { var t = this._a * this._d - this._c * this._b; return t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty) }, isSingular: function() { return !this.isInvertible() }, transform: function(t, e, r) { return arguments.length < 3 ? this._transformPoint(q.read(arguments)) : this._transformCoordinates(t, e, r) }, _transformPoint: function(t, e, r) { var n = t.x,
                                        s = t.y; return e || (e = new q), e._set(n * this._a + s * this._c + this._tx, n * this._b + s * this._d + this._ty, r) }, _transformCoordinates: function(t, e, r) { for(var n = 0, s = 2 * r; n < s; n += 2) { var u = t[n],
                                            h = t[n + 1];
                                        e[n] = u * this._a + h * this._c + this._tx, e[n + 1] = u * this._b + h * this._d + this._ty } return e }, _transformCorners: function(t) { var e = t.x,
                                        r = t.y,
                                        n = e + t.width,
                                        s = r + t.height,
                                        u = [e, r, n, r, n, s, e, s]; return this._transformCoordinates(u, u, 4) }, _transformBounds: function(t, e, r) { for(var n = this._transformCorners(t), s = n.slice(0, 2), u = s.slice(), h = 2; h < 8; h++) { var o = n[h],
                                            l = h & 1;
                                        o < s[l] ? s[l] = o : o > u[l] && (u[l] = o) } return e || (e = new ht), e._set(s[0], s[1], u[0] - s[0], u[1] - s[1], r) }, inverseTransform: function() { return this._inverseTransform(q.read(arguments)) }, _inverseTransform: function(t, e, r) { var n = this._a,
                                        s = this._b,
                                        u = this._c,
                                        h = this._d,
                                        o = this._tx,
                                        l = this._ty,
                                        f = n * h - s * u,
                                        g = null; if(f && !isNaN(f) && isFinite(o) && isFinite(l)) { var v = t.x - this._tx,
                                            d = t.y - this._ty;
                                        e || (e = new q), g = e._set((v * h - d * u) / f, (d * n - v * s) / f, r) } return g }, decompose: function() { var t = this._a,
                                        e = this._b,
                                        r = this._c,
                                        n = this._d,
                                        s = t * n - e * r,
                                        u = Math.sqrt,
                                        h = Math.atan2,
                                        o = 180 / Math.PI,
                                        l, f, g; if(t !== 0 || e !== 0) { var v = u(t * t + e * e);
                                        l = Math.acos(t / v) * (e > 0 ? 1 : -1), f = [v, s / v], g = [h(t * r + e * n, v * v), 0] } else if(r !== 0 || n !== 0) { var d = u(r * r + n * n);
                                        l = Math.asin(r / d) * (n > 0 ? 1 : -1), f = [s / d, d], g = [0, h(t * r + e * n, d * d)] } else l = 0, g = f = [0, 0]; return { translation: this.getTranslation(), rotation: l * o, scaling: new q(f), skewing: new q(g[0] * o, g[1] * o) } }, getValues: function() { return [this._a, this._b, this._c, this._d, this._tx, this._ty] }, getTranslation: function() { return new q(this._tx, this._ty) }, getScaling: function() { return this.decompose()
                                        .scaling }, getRotation: function() { return this.decompose()
                                        .rotation }, applyToContext: function(t) { this.isIdentity() || t.transform(this._a, this._b, this._c, this._d, this._tx, this._ty) } }, M.each(["a", "b", "c", "d", "tx", "ty"], function(t) { var e = M.capitalize(t),
                                    r = "_" + t;
                                this["get" + e] = function() { return this[r] }, this["set" + e] = function(n) { this[r] = n, this._changed() } }, {})),
                            k = M.extend({ _class: "Line", initialize: function(e, r, n, s, u) { var h = !1;
                                    arguments.length >= 4 ? (this._px = e, this._py = r, this._vx = n, this._vy = s, h = u) : (this._px = e.x, this._py = e.y, this._vx = r.x, this._vy = r.y, h = n), h || (this._vx -= this._px, this._vy -= this._py) }, getPoint: function() { return new q(this._px, this._py) }, getVector: function() { return new q(this._vx, this._vy) }, getLength: function() { return this.getVector()
                                        .getLength() }, intersect: function(t, e) { return k.intersect(this._px, this._py, this._vx, this._vy, t._px, t._py, t._vx, t._vy, !0, e) }, getSide: function(t, e) { return k.getSide(this._px, this._py, this._vx, this._vy, t.x, t.y, !0, e) }, getDistance: function(t) { return Math.abs(this.getSignedDistance(t)) }, getSignedDistance: function(t) { return k.getSignedDistance(this._px, this._py, this._vx, this._vy, t.x, t.y, !0) }, isCollinear: function(t) { return q.isCollinear(this._vx, this._vy, t._vx, t._vy) }, isOrthogonal: function(t) { return q.isOrthogonal(this._vx, this._vy, t._vx, t._vy) }, statics: { intersect: function(t, e, r, n, s, u, h, o, l, f) { l || (r -= t, n -= e, h -= s, o -= u); var g = r * o - n * h; if(!Ft.isMachineZero(g)) { var v = t - s,
                                                d = e - u,
                                                p = (h * d - o * v) / g,
                                                x = (r * d - n * v) / g,
                                                y = 1e-12,
                                                w = -y,
                                                _ = 1 + y; if(f || w < p && p < _ && w < x && x < _) return f || (p = p <= 0 ? 0 : p >= 1 ? 1 : p), new q(t + p * r, e + p * n) } }, getSide: function(t, e, r, n, s, u, h, o) { h || (r -= t, n -= e); var l = s - t,
                                            f = u - e,
                                            g = l * n - f * r; return !o && Ft.isMachineZero(g) && (g = (l * r + l * r) / (r * r + n * n), g >= 0 && g <= 1 && (g = 0)), g < 0 ? -1 : g > 0 ? 1 : 0 }, getSignedDistance: function(t, e, r, n, s, u, h) { return h || (r -= t, n -= e), r === 0 ? n > 0 ? s - t : t - s : n === 0 ? r < 0 ? u - e : e - u : ((s - t) * n - (u - e) * r) / (n > r ? n * Math.sqrt(1 + r * r / (n * n)) : r * Math.sqrt(1 + n * n / (r * r))) }, getDistance: function(t, e, r, n, s, u, h) { return Math.abs(k.getSignedDistance(t, e, r, n, s, u, h)) } } }),
                            ie = ii.extend({ _class: "Project", _list: "projects", _reference: "project", _compactSerialize: !0, initialize: function(e) { ii.call(this, !0), this._children = [], this._namedChildren = {}, this._activeLayer = null, this._currentStyle = new Ee(null, null, this), this._view = Rt.create(this, e || Kt.getCanvas(1, 1)), this._selectionItems = {}, this._selectionCount = 0, this._updateVersion = 0 }, _serialize: function(t, e) { return M.serialize(this._children, t, !0, e) }, _changed: function(t, e) { if(t & 1) { var r = this._view;
                                        r && (r._needsUpdate = !0, !r._requested && r._autoUpdate && r.requestUpdate()) } var n = this._changes; if(n && e) { var s = this._changesById,
                                            u = e._id,
                                            h = s[u];
                                        h ? h.flags |= t : n.push(s[u] = { item: e, flags: t }) } }, clear: function() { for(var t = this._children, e = t.length - 1; e >= 0; e--) t[e].remove() }, isEmpty: function() { return !this._children.length }, remove: function t() { return t.base.call(this) ? (this._view && this._view.remove(), !0) : !1 }, getView: function() { return this._view }, getCurrentStyle: function() { return this._currentStyle }, setCurrentStyle: function(t) { this._currentStyle.set(t) }, getIndex: function() { return this._index }, getOptions: function() { return this._scope.settings }, getLayers: function() { return this._children }, getActiveLayer: function() { return this._activeLayer || new Oe({ project: this, insert: !0 }) }, getSymbolDefinitions: function() { var t = [],
                                        e = {}; return this.getItems({ class: si, match: function(r) { var n = r._definition,
                                                s = n._id; return e[s] || (e[s] = !0, t.push(n)), !1 } }), t }, getSymbols: "getSymbolDefinitions", getSelectedItems: function() { var t = this._selectionItems,
                                        e = []; for(var r in t) { var n = t[r],
                                            s = n._selection;
                                        s & 1 && n.isInserted() ? e.push(n) : s || this._updateSelection(n) } return e }, _updateSelection: function(t) { var e = t._id,
                                        r = this._selectionItems;
                                    t._selection ? r[e] !== t && (this._selectionCount++, r[e] = t) : r[e] === t && (this._selectionCount--, delete r[e]) }, selectAll: function() { for(var t = this._children, e = 0, r = t.length; e < r; e++) t[e].setFullySelected(!0) }, deselectAll: function() { var t = this._selectionItems; for(var e in t) t[e].setFullySelected(!1) }, addLayer: function(t) { return this.insertLayer(tt, t) }, insertLayer: function(t, e) { if(e instanceof Oe) { e._remove(!1, !0), M.splice(this._children, [e], t, 0), e._setProject(this, !0); var r = e._name;
                                        r && e.setName(r), this._changes && e._changed(5), this._activeLayer || (this._activeLayer = e) } else e = null; return e }, _insertItem: function(t, e, r) { return e = this.insertLayer(t, e) || (this._activeLayer || this._insertItem(tt, new Oe(Ct.NO_INSERT), !0))
                                        .insertChild(t, e), r && e.activate && e.activate(), e }, getItems: function(t) { return Ct._getItems(this, t) }, getItem: function(t) { return Ct._getItems(this, t, null, null, !0)[0] || null }, importJSON: function(t) { this.activate(); var e = this._activeLayer; return M.importJSON(t, e && e.isEmpty() && e) }, removeOn: function(t) { var e = this._removeSets; if(e) { t === "mouseup" && (e.mousedrag = null); var r = e[t]; if(r) { for(var n in r) { var s = r[n]; for(var u in e) { var h = e[u];
                                                    h && h != r && delete h[s._id] } s.remove() } e[t] = null } } }, draw: function(t, e, r) { this._updateVersion++, t.save(), e.applyToContext(t); for(var n = this._children, s = new M({ offset: new q(0, 0), pixelRatio: r, viewMatrix: e.isIdentity() ? null : e, matrices: [new lt], updateMatrix: !0 }), u = 0, h = n.length; u < h; u++) n[u].draw(t, s); if(t.restore(), this._selectionCount > 0) { t.save(), t.strokeWidth = 1; var o = this._selectionItems,
                                            l = this._scope.settings.handleSize,
                                            f = this._updateVersion; for(var g in o) o[g]._drawSelection(t, e, l, o, f);
                                        t.restore() } } }),
                            Ct = M.extend(Le, { statics: { extend: function t(e) { return e._serializeFields && (e._serializeFields = M.set({}, this.prototype._serializeFields, e._serializeFields)), t.base.apply(this, arguments) }, INSERT: { insert: !0 }, NO_INSERT: { insert: !1 } }, _class: "Item", _name: null, _applyMatrix: !0, _canApplyMatrix: !0, _canScaleStroke: !1, _pivot: null, _visible: !0, _blendMode: "normal", _opacity: 1, _locked: !1, _guide: !1, _clipMask: !1, _selection: 0, _selectBounds: !0, _selectChildren: !1, _serializeFields: { name: null, applyMatrix: null, matrix: new lt, pivot: null, visible: !0, blendMode: "normal", opacity: 1, locked: !1, guide: !1, clipMask: !1, selected: !1, data: {} }, _prioritize: ["applyMatrix"] }, new function() { var t = ["onMouseDown", "onMouseUp", "onMouseDrag", "onClick", "onDoubleClick", "onMouseMove", "onMouseEnter", "onMouseLeave"]; return M.each(t, function(e) { this._events[e] = { install: function(r) { this.getView()
                                                ._countItemEvent(r, 1) }, uninstall: function(r) { this.getView()
                                                ._countItemEvent(r, -1) } } }, { _events: { onFrame: { install: function() { this.getView()
                                                    ._animateItem(this, !0) }, uninstall: function() { this.getView()
                                                    ._animateItem(this, !1) } }, onLoad: {}, onError: {} }, statics: { _itemHandlers: t } }) }, { initialize: function() {}, _initialize: function(t, e) { var r = t && M.isPlainObject(t),
                                        n = r && t.internal === !0,
                                        s = this._matrix = new lt,
                                        u = r && t.project || dt.project,
                                        h = dt.settings; return this._id = n ? null : de.get(), this._parent = this._index = null, this._applyMatrix = this._canApplyMatrix && h.applyMatrix, e && s.translate(e), s._owner = this, this._style = new Ee(u._currentStyle, this, u), n || r && t.insert == !1 || !h.insertItems && !(r && t.insert == !0) ? this._setProject(u) : (r && t.parent || u)
                                        ._insertItem(tt, this, !0), r && t !== Ct.NO_INSERT && t !== Ct.INSERT && this.set(t, { internal: !0, insert: !0, project: !0, parent: !0 }), r }, _serialize: function(t, e) { var r = {},
                                        n = this;

                                    function s(u) { for(var h in u) { var o = n[h];
                                            M.equals(o, h === "leading" ? u.fontSize * 1.2 : u[h]) || (r[h] = M.serialize(o, t, h !== "data", e)) } } return s(this._serializeFields), this instanceof ae || s(this._style._defaults), [this._class, r] }, _changed: function(t) { var e = this._symbol,
                                        r = this._parent || e,
                                        n = this._project;
                                    t & 8 && (this._bounds = this._position = this._decomposed = tt), t & 16 && (this._globalMatrix = tt), r && t & 72 && Ct._clearBoundsCache(r), t & 2 && Ct._clearBoundsCache(this), n && n._changed(t, this), e && e._changed(t) }, getId: function() { return this._id }, getName: function() { return this._name }, setName: function(t) { if(this._name && this._removeNamed(), t === +t + "") throw new Error("Names consisting only of numbers are not supported."); var e = this._getOwner(); if(t && e) { var r = e._children,
                                            n = e._namedChildren;
                                        (n[t] = n[t] || [])
                                        .push(this), t in r || (r[t] = this) } this._name = t || tt, this._changed(256) }, getStyle: function() { return this._style }, setStyle: function(t) { this.getStyle()
                                        .set(t) } }, M.each(["locked", "visible", "blendMode", "opacity", "guide"], function(t) { var e = M.capitalize(t),
                                    r = "_" + t,
                                    n = { locked: 256, visible: 265 };
                                this["get" + e] = function() { return this[r] }, this["set" + e] = function(s) { s != this[r] && (this[r] = s, this._changed(n[t] || 257)) } }, {}), { beans: !0, getSelection: function() { return this._selection }, setSelection: function(t) { if(t !== this._selection) { this._selection = t; var e = this._project;
                                        e && (e._updateSelection(this), this._changed(257)) } }, _changeSelection: function(t, e) { var r = this._selection;
                                    this.setSelection(e ? r | t : r & ~t) }, isSelected: function() { if(this._selectChildren) { for(var t = this._children, e = 0, r = t.length; e < r; e++)
                                            if(t[e].isSelected()) return !0 } return !!(this._selection & 1) }, setSelected: function(t) { if(this._selectChildren)
                                        for(var e = this._children, r = 0, n = e.length; r < n; r++) e[r].setSelected(t);
                                    this._changeSelection(1, t) }, isFullySelected: function() { var t = this._children,
                                        e = !!(this._selection & 1); if(t && e) { for(var r = 0, n = t.length; r < n; r++)
                                            if(!t[r].isFullySelected()) return !1; return !0 } return e }, setFullySelected: function(t) { var e = this._children; if(e)
                                        for(var r = 0, n = e.length; r < n; r++) e[r].setFullySelected(t);
                                    this._changeSelection(1, t) }, isClipMask: function() { return this._clipMask }, setClipMask: function(t) { this._clipMask != (t = !!t) && (this._clipMask = t, t && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(257), this._parent && this._parent._changed(2048)) }, getData: function() { return this._data || (this._data = {}), this._data }, setData: function(t) { this._data = t }, getPosition: function(t) { var e = t ? q : xt,
                                        r = this._position || (this._position = this._getPositionFromBounds()); return new e(r.x, r.y, this, "setPosition") }, setPosition: function() { this.translate(q.read(arguments)
                                        .subtract(this.getPosition(!0))) }, _getPositionFromBounds: function(t) { return this._pivot ? this._matrix._transformPoint(this._pivot) : (t || this.getBounds())
                                        .getCenter(!0) }, getPivot: function() { var t = this._pivot; return t ? new xt(t.x, t.y, this, "setPivot") : null }, setPivot: function() { this._pivot = q.read(arguments, 0, { clone: !0, readNull: !0 }), this._position = tt } }, M.each({ getStrokeBounds: { stroke: !0 }, getHandleBounds: { handle: !0 }, getInternalBounds: { internal: !0 } }, function(t, e) { this[e] = function(r) { return this.getBounds(r, t) } }, { beans: !0, getBounds: function(t, e) { var r = e || t instanceof lt,
                                        n = M.set({}, r ? e : t, this._boundsOptions);
                                    (!n.stroke || this.getStrokeScaling()) && (n.cacheItem = this); var s = this._getCachedBounds(r && t, n)
                                        .rect; return arguments.length ? s : new ni(s.x, s.y, s.width, s.height, this, "setBounds") }, setBounds: function() { var t = ht.read(arguments),
                                        e = this.getBounds(),
                                        r = this._matrix,
                                        n = new lt,
                                        s = t.getCenter();
                                    n.translate(s), (t.width != e.width || t.height != e.height) && (r.isInvertible() || (r.set(r._backup || new lt()
                                        .translate(r.getTranslation())), e = this.getBounds()), n.scale(e.width !== 0 ? t.width / e.width : 0, e.height !== 0 ? t.height / e.height : 0)), s = e.getCenter(), n.translate(-s.x, -s.y), this.transform(n) }, _getBounds: function(t, e) { var r = this._children; return !r || !r.length ? new ht : (Ct._updateBoundsCache(this, e.cacheItem), Ct._getBounds(r, t, e)) }, _getBoundsCacheKey: function(t, e) { return [t.stroke ? 1 : 0, t.handle ? 1 : 0, e ? 1 : 0].join("") }, _getCachedBounds: function(t, e, r) { t = t && t._orNullIfIdentity(); var n = e.internal && !r,
                                        s = e.cacheItem,
                                        u = n ? null : this._matrix._orNullIfIdentity(),
                                        h = s && (!t || t.equals(u)) && this._getBoundsCacheKey(e, n),
                                        o = this._bounds; if(Ct._updateBoundsCache(this._parent || this._symbol, s), h && o && h in o) { var l = o[h]; return { rect: l.rect.clone(), nonscaling: l.nonscaling } } var f = this._getBounds(t || u, e),
                                        g = f.rect || f,
                                        v = this._style,
                                        d = f.nonscaling || v.hasStroke() && !v.getStrokeScaling(); if(h) { o || (this._bounds = o = {}); var l = o[h] = { rect: g.clone(), nonscaling: d, internal: n } } return { rect: g, nonscaling: d } }, _getStrokeMatrix: function(t, e) { var r = this.getStrokeScaling() ? null : e && e.internal ? this : this._parent || this._symbol && this._symbol._item,
                                        n = r ? r.getViewMatrix()
                                        .invert() : t; return n && n._shiftless() }, statics: { _updateBoundsCache: function(t, e) { if(t && e) { var r = e._id,
                                                n = t._boundsCache = t._boundsCache || { ids: {}, list: [] };
                                            n.ids[r] || (n.list.push(e), n.ids[r] = e) } }, _clearBoundsCache: function(t) { var e = t._boundsCache; if(e) { t._bounds = t._position = t._boundsCache = tt; for(var r = 0, n = e.list, s = n.length; r < s; r++) { var u = n[r];
                                                u !== t && (u._bounds = u._position = tt, u._boundsCache && Ct._clearBoundsCache(u)) } } }, _getBounds: function(t, e, r) { var n = 1 / 0,
                                            s = -n,
                                            u = n,
                                            h = s,
                                            o = !1;
                                        r = r || {}; for(var l = 0, f = t.length; l < f; l++) { var g = t[l]; if(g._visible && !g.isEmpty(!0)) { var v = g._getCachedBounds(e && e.appended(g._matrix), r, !0),
                                                    d = v.rect;
                                                n = Math.min(d.x, n), u = Math.min(d.y, u), s = Math.max(d.x + d.width, s), h = Math.max(d.y + d.height, h), v.nonscaling && (o = !0) } } return { rect: isFinite(n) ? new ht(n, u, s - n, h - u) : new ht, nonscaling: o } } } }), { beans: !0, _decompose: function() { return this._applyMatrix ? null : this._decomposed || (this._decomposed = this._matrix.decompose()) }, getRotation: function() { var t = this._decompose(); return t ? t.rotation : 0 }, setRotation: function(t) { var e = this.getRotation(); if(e != null && t != null) { var r = this._decomposed;
                                        this.rotate(t - e), r && (r.rotation = t, this._decomposed = r) } }, getScaling: function() { var t = this._decompose(),
                                        e = t && t.scaling; return new xt(e ? e.x : 1, e ? e.y : 1, this, "setScaling") }, setScaling: function() { var t = this.getScaling(),
                                        e = q.read(arguments, 0, { clone: !0, readNull: !0 }); if(t && e && !t.equals(e)) { var r = this.getRotation(),
                                            n = this._decomposed,
                                            s = new lt,
                                            u = Ft.isZero; if(u(t.x) || u(t.y)) s.translate(n.translation), r && s.rotate(r), s.scale(e.x, e.y), this._matrix.set(s);
                                        else { var h = this.getPosition(!0);
                                            s.translate(h), r && s.rotate(r), s.scale(e.x / t.x, e.y / t.y), r && s.rotate(-r), s.translate(h.negate()), this.transform(s) } n && (n.scaling = e, this._decomposed = n) } }, getMatrix: function() { return this._matrix }, setMatrix: function() { var t = this._matrix;
                                    t.set.apply(t, arguments) }, getGlobalMatrix: function(t) { var e = this._globalMatrix; if(e)
                                        for(var r = this._parent, n = []; r;) { if(!r._globalMatrix) { e = null; for(var s = 0, u = n.length; s < u; s++) n[s]._globalMatrix = null; break } n.push(r), r = r._parent }
                                    if(!e) { e = this._globalMatrix = this._matrix.clone(); var r = this._parent;
                                        r && e.prepend(r.getGlobalMatrix(!0)) } return t ? e : e.clone() }, getViewMatrix: function() { return this.getGlobalMatrix()
                                        .prepend(this.getView()
                                            ._matrix) }, getApplyMatrix: function() { return this._applyMatrix }, setApplyMatrix: function(t) {
                                    (this._applyMatrix = this._canApplyMatrix && !!t) && this.transform(null, !0) }, getTransformContent: "#getApplyMatrix", setTransformContent: "#setApplyMatrix" }, { getProject: function() { return this._project }, _setProject: function(t, e) { if(this._project !== t) { this._project && this._installEvents(!1), this._project = t; for(var r = this._children, n = 0, s = r && r.length; n < s; n++) r[n]._setProject(t);
                                        e = !0 } e && this._installEvents(!0) }, getView: function() { return this._project._view }, _installEvents: function t(e) { t.base.call(this, e); for(var r = this._children, n = 0, s = r && r.length; n < s; n++) r[n]._installEvents(e) }, getLayer: function() { for(var t = this; t = t._parent;)
                                        if(t instanceof Oe) return t; return null }, getParent: function() { return this._parent }, setParent: function(t) { return t.addChild(this) }, _getOwner: "#getParent", getChildren: function() { return this._children }, setChildren: function(t) { this.removeChildren(), this.addChildren(t) }, getFirstChild: function() { return this._children && this._children[0] || null }, getLastChild: function() { return this._children && this._children[this._children.length - 1] || null }, getNextSibling: function() { var t = this._getOwner(); return t && t._children[this._index + 1] || null }, getPreviousSibling: function() { var t = this._getOwner(); return t && t._children[this._index - 1] || null }, getIndex: function() { return this._index }, equals: function(t) { return t === this || t && this._class === t._class && this._style.equals(t._style) && this._matrix.equals(t._matrix) && this._locked === t._locked && this._visible === t._visible && this._blendMode === t._blendMode && this._opacity === t._opacity && this._clipMask === t._clipMask && this._guide === t._guide && this._equals(t) || !1 }, _equals: function(t) { return M.equals(this._children, t._children) }, clone: function(t) { var e = new this.constructor(Ct.NO_INSERT),
                                        r = this._children,
                                        n = M.pick(t ? t.insert : tt, t === tt || t === !0),
                                        s = M.pick(t ? t.deep : tt, !0);
                                    r && e.copyAttributes(this), (!r || s) && e.copyContent(this), r || e.copyAttributes(this), n && e.insertAbove(this); var u = this._name,
                                        h = this._parent; if(u && h) { for(var r = h._children, o = u, l = 1; r[u];) u = o + " " + l++;
                                        u !== o && e.setName(u) } return e }, copyContent: function(t) { for(var e = t._children, r = 0, n = e && e.length; r < n; r++) this.addChild(e[r].clone(!1), !0) }, copyAttributes: function(t, e) { this.setStyle(t._style); for(var r = ["_locked", "_visible", "_blendMode", "_opacity", "_clipMask", "_guide"], n = 0, s = r.length; n < s; n++) { var u = r[n];
                                        t.hasOwnProperty(u) && (this[u] = t[u]) } e || this._matrix.set(t._matrix, !0), this.setApplyMatrix(t._applyMatrix), this.setPivot(t._pivot), this.setSelection(t._selection); var h = t._data,
                                        o = t._name;
                                    this._data = h ? M.clone(h) : null, o && this.setName(o) }, rasterize: function(t, e) { var r, n, s;
                                    M.isPlainObject(t) ? (r = t.resolution, n = t.insert, s = t.raster) : (r = t, n = e), s || (s = new re(Ct.NO_INSERT)); var u = this.getStrokeBounds(),
                                        h = (r || this.getView()
                                            .getResolution()) / 72,
                                        o = u.getTopLeft()
                                        .floor(),
                                        l = u.getBottomRight()
                                        .ceil(),
                                        f = new ot(l.subtract(o)),
                                        g = f.multiply(h); if(s.setSize(g, !0), !g.isZero()) { var v = s.getContext(!0),
                                            d = new lt()
                                            .scale(h)
                                            .translate(o.negate());
                                        v.save(), d.applyToContext(v), this.draw(v, new M({ matrices: [d] })), v.restore() } return s._matrix.set(new lt()
                                        .translate(o.add(f.divide(2)))
                                        .scale(1 / h)), (n === tt || n) && s.insertAbove(this), s }, contains: function() { var t = this._matrix; return t.isInvertible() && !!this._contains(t._inverseTransform(q.read(arguments))) }, _contains: function(t) { var e = this._children; if(e) { for(var r = e.length - 1; r >= 0; r--)
                                            if(e[r].contains(t)) return !0; return !1 } return t.isInside(this.getInternalBounds()) }, isInside: function() { return ht.read(arguments)
                                        .contains(this.getBounds()) }, _asPathItem: function() { return new Bt.Rectangle({ rectangle: this.getInternalBounds(), matrix: this._matrix, insert: !1 }) }, intersects: function(t, e) { return t instanceof Ct ? this._asPathItem()
                                        .getIntersections(t._asPathItem(), null, e, !0)
                                        .length > 0 : !1 } }, new function() {
                                function t() { var n = arguments; return this._hitTest(q.read(n), xe.getOptions(n)) }

                                function e() { var n = arguments,
                                        s = q.read(n),
                                        u = xe.getOptions(n),
                                        h = []; return this._hitTest(s, new M({ all: h }, u)), h }

                                function r(n, s, u, h) { var o = this._children; if(o)
                                        for(var l = o.length - 1; l >= 0; l--) { var f = o[l],
                                                g = f !== h && f._hitTest(n, s, u); if(g && !s.all) return g }
                                    return null } return ie.inject({ hitTest: t, hitTestAll: e, _hitTest: r }), { hitTest: t, hitTestAll: e, _hitTestChildren: r } }, { _hitTest: function(t, e, r) { if(this._locked || !this._visible || this._guide && !e.guides || this.isEmpty()) return null; var n = this._matrix,
                                        s = r ? r.appended(n) : this.getGlobalMatrix()
                                        .prepend(this.getView()
                                            ._matrix),
                                        u = Math.max(e.tolerance, 1e-12),
                                        h = e._tolerancePadding = new ot(Bt._getStrokePadding(u, n._shiftless()
                                            .invert())); if(t = n._inverseTransform(t), !t || !this._children && !this.getBounds({ internal: !0, stroke: !0, handle: !0 })
                                        .expand(h.multiply(2))
                                        ._containsPoint(t)) return null; var o = !(e.guides && !this._guide || e.selected && !this.isSelected() || e.type && e.type !== M.hyphenate(this._class) || e.class && !(this instanceof e.class)),
                                        l = e.match,
                                        f = this,
                                        g, v;

                                    function d(c) { return c && l && !l(c) && (c = null), c && e.all && e.all.push(c), c }

                                    function p(c, C) { var S = C ? g["get" + C]() : f.getPosition(); if(t.subtract(S)
                                            .divide(h)
                                            .length <= 1) return new xe(c, f, { name: C ? M.hyphenate(C) : c, point: S }) } var x = e.position,
                                        y = e.center,
                                        w = e.bounds; if(o && this._parent && (x || y || w)) { if((y || w) && (g = this.getInternalBounds()), v = x && p("position") || y && p("center", "Center"), !v && w)
                                            for(var _ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], A = 0; A < 8 && !v; A++) v = p("bounds", _[A]);
                                        v = d(v) } return v || (v = this._hitTestChildren(t, e, s) || o && d(this._hitTestSelf(t, e, s, this.getStrokeScaling() ? null : s._shiftless()
                                        .invert())) || null), v && v.point && (v.point = n.transform(v.point)), v }, _hitTestSelf: function(t, e) { if(e.fill && this.hasFill() && this._contains(t)) return new xe("fill", this) }, matches: function(t, e) {
                                    function r(h, o) { for(var l in h)
                                            if(h.hasOwnProperty(l)) { var f = h[l],
                                                    g = o[l]; if(M.isPlainObject(f) && M.isPlainObject(g)) { if(!r(f, g)) return !1 } else if(!M.equals(f, g)) return !1 } return !0 } var n = typeof t; if(n === "object") { for(var s in t)
                                            if(t.hasOwnProperty(s) && !this.matches(s, t[s])) return !1; return !0 } else { if(n === "function") return t(this); if(t === "match") return e(this); var u = /^(empty|editable)$/.test(t) ? this["is" + M.capitalize(t)]() : t === "type" ? M.hyphenate(this._class) : this[t]; if(t === "class") { if(typeof e == "function") return this instanceof e;
                                            u = this._class } if(typeof e == "function") return !!e(u); if(e) { if(e.test) return e.test(u); if(M.isPlainObject(e)) return r(e, u) } return M.equals(u, e) } }, getItems: function(t) { return Ct._getItems(this, t, this._matrix) }, getItem: function(t) { return Ct._getItems(this, t, this._matrix, null, !0)[0] || null }, statics: { _getItems: function t(e, r, n, s, u) { if(!s) { var h = typeof r == "object" && r,
                                                o = h && h.overlapping,
                                                l = h && h.inside,
                                                f = o || l,
                                                d = f && ht.read([f]);
                                            s = { items: [], recursive: h && h.recursive !== !1, inside: !!l, overlapping: !!o, rect: d, path: o && new Bt.Rectangle({ rectangle: d, insert: !1 }) }, h && (r = M.filter({}, r, { recursive: !0, inside: !0, overlapping: !0 })) } var g = e._children,
                                            v = s.items,
                                            d = s.rect;
                                        n = d && (n || new lt); for(var p = 0, x = g && g.length; p < x; p++) { var y = g[p],
                                                w = n && n.appended(y._matrix),
                                                _ = !0; if(d) { var f = y.getBounds(w); if(!d.intersects(f)) continue;
                                                d.contains(f) || s.overlapping && (f.contains(d) || s.path.intersects(y, w)) || (_ = !1) } if(_ && y.matches(r) && (v.push(y), u) || (s.recursive !== !1 && t(y, r, w, s, u), u && v.length > 0)) break } return v } } }, { importJSON: function(t) { var e = M.importJSON(t, this); return e !== this ? this.addChild(e) : e }, addChild: function(t) { return this.insertChild(tt, t) }, insertChild: function(t, e) { var r = e ? this.insertChildren(t, [e]) : null; return r && r[0] }, addChildren: function(t) { return this.insertChildren(this._children.length, t) }, insertChildren: function(t, e) { var r = this._children; if(r && e && e.length > 0) { e = M.slice(e); for(var n = {}, s = e.length - 1; s >= 0; s--) { var u = e[s],
                                                h = u && u._id;!u || n[h] ? e.splice(s, 1) : (u._remove(!1, !0), n[h] = !0) } M.splice(r, e, t, 0); for(var o = this._project, l = o._changes, s = 0, f = e.length; s < f; s++) { var u = e[s],
                                                g = u._name;
                                            u._parent = this, u._setProject(o, !0), g && u.setName(g), l && u._changed(5) } this._changed(11) } else e = null; return e }, _insertItem: "#insertChild", _insertAt: function(t, e) { var r = t && t._getOwner(),
                                        n = t !== this && r ? this : null; return n && (n._remove(!1, !0), r._insertItem(t._index + e, n)), n }, insertAbove: function(t) { return this._insertAt(t, 1) }, insertBelow: function(t) { return this._insertAt(t, 0) }, sendToBack: function() { var t = this._getOwner(); return t ? t._insertItem(0, this) : null }, bringToFront: function() { var t = this._getOwner(); return t ? t._insertItem(tt, this) : null }, appendTop: "#addChild", appendBottom: function(t) { return this.insertChild(0, t) }, moveAbove: "#insertAbove", moveBelow: "#insertBelow", addTo: function(t) { return t._insertItem(tt, this) }, copyTo: function(t) { return this.clone(!1)
                                        .addTo(t) }, reduce: function(t) { var e = this._children; if(e && e.length === 1) { var r = e[0].reduce(t); return this._parent ? (r.insertAbove(this), this.remove()) : r.remove(), r } return this }, _removeNamed: function() { var t = this._getOwner(); if(t) { var e = t._children,
                                            r = t._namedChildren,
                                            n = this._name,
                                            s = r[n],
                                            u = s ? s.indexOf(this) : -1;
                                        u !== -1 && (e[n] == this && delete e[n], s.splice(u, 1), s.length ? e[n] = s[0] : delete r[n]) } }, _remove: function(t, e) { var r = this._getOwner(),
                                        n = this._project,
                                        s = this._index; return this._style && this._style._dispose(), r ? (this._name && this._removeNamed(), s != null && (n._activeLayer === this && (n._activeLayer = this.getNextSibling() || this.getPreviousSibling()), M.splice(r._children, null, s, 1)), this._installEvents(!1), t && n._changes && this._changed(5), e && r._changed(11, this), this._parent = null, !0) : !1 }, remove: function() { return this._remove(!0, !0) }, replaceWith: function(t) { var e = t && t.insertBelow(this); return e && this.remove(), e }, removeChildren: function(t, e) { if(!this._children) return null;
                                    t = t || 0, e = M.pick(e, this._children.length); for(var r = M.splice(this._children, null, t, e - t), n = r.length - 1; n >= 0; n--) r[n]._remove(!0, !1); return r.length > 0 && this._changed(11), r }, clear: "#removeChildren", reverseChildren: function() { if(this._children) { this._children.reverse(); for(var t = 0, e = this._children.length; t < e; t++) this._children[t]._index = t;
                                        this._changed(11) } }, isEmpty: function(t) { var e = this._children,
                                        r = e ? e.length : 0; if(t) { for(var n = 0; n < r; n++)
                                            if(!e[n].isEmpty(t)) return !1; return !0 } return !r }, isEditable: function() { for(var t = this; t;) { if(!t._visible || t._locked) return !1;
                                        t = t._parent } return !0 }, hasFill: function() { return this.getStyle()
                                        .hasFill() }, hasStroke: function() { return this.getStyle()
                                        .hasStroke() }, hasShadow: function() { return this.getStyle()
                                        .hasShadow() }, _getOrder: function(t) {
                                    function e(h) { var o = [];
                                        do o.unshift(h); while(h = h._parent); return o } for(var r = e(this), n = e(t), s = 0, u = Math.min(r.length, n.length); s < u; s++)
                                        if(r[s] != n[s]) return r[s]._index < n[s]._index ? 1 : -1; return 0 }, hasChildren: function() { return this._children && this._children.length > 0 }, isInserted: function() { return this._parent ? this._parent.isInserted() : !1 }, isAbove: function(t) { return this._getOrder(t) === -1 }, isBelow: function(t) { return this._getOrder(t) === 1 }, isParent: function(t) { return this._parent === t }, isChild: function(t) { return t && t._parent === this }, isDescendant: function(t) { for(var e = this; e = e._parent;)
                                        if(e === t) return !0; return !1 }, isAncestor: function(t) { return t ? t.isDescendant(this) : !1 }, isSibling: function(t) { return this._parent === t._parent }, isGroupedWith: function(t) { for(var e = this._parent; e;) { if(e._parent && /^(Group|Layer|CompoundPath)$/.test(e._class) && t.isDescendant(e)) return !0;
                                        e = e._parent } return !1 } }, M.each(["rotate", "scale", "shear", "skew"], function(t) { var e = t === "rotate";
                                this[t] = function() { var r = arguments,
                                        n = (e ? M : q)
                                        .read(r),
                                        s = q.read(r, 0, { readNull: !0 }); return this.transform(new lt()[t](n, s || this.getPosition(!0))) } }, { translate: function() { var t = new lt; return this.transform(t.translate.apply(t, arguments)) }, transform: function(t, e, r) { var n = this._matrix,
                                        s = t && !t.isIdentity(),
                                        u = r && this._canApplyMatrix || this._applyMatrix && (s || !n.isIdentity() || e && this._children); if(!s && !u) return this; if(s) {!t.isInvertible() && n.isInvertible() && (n._backup = n.getValues()), n.prepend(t, !0); var h = this._style,
                                            o = h.getFillColor(!0),
                                            l = h.getStrokeColor(!0);
                                        o && o.transform(t), l && l.transform(t) } if(u && (u = this._transformContent(n, e, r))) { var f = this._pivot;
                                        f && n._transformPoint(f, f, !0), n.reset(!0), r && this._canApplyMatrix && (this._applyMatrix = !0) } var g = this._bounds,
                                        v = this._position;
                                    (s || u) && this._changed(25); var d = s && g && t.decompose(); if(d && d.skewing.isZero() && d.rotation % 90 === 0) { for(var p in g) { var x = g[p]; if(x.nonscaling) delete g[p];
                                            else if(u || !x.internal) { var y = x.rect;
                                                t._transformBounds(y, y) } } this._bounds = g; var w = g[this._getBoundsCacheKey(this._boundsOptions || {})];
                                        w && (this._position = this._getPositionFromBounds(w.rect)) } else s && v && this._pivot && (this._position = t._transformPoint(v, v)); return this }, _transformContent: function(t, e, r) { var n = this._children; if(n) { for(var s = 0, u = n.length; s < u; s++) n[s].transform(t, e, r); return !0 } }, globalToLocal: function() { return this.getGlobalMatrix(!0)
                                        ._inverseTransform(q.read(arguments)) }, localToGlobal: function() { return this.getGlobalMatrix(!0)
                                        ._transformPoint(q.read(arguments)) }, parentToLocal: function() { return this._matrix._inverseTransform(q.read(arguments)) }, localToParent: function() { return this._matrix._transformPoint(q.read(arguments)) }, fitBounds: function(t, e) { t = ht.read(arguments); var r = this.getBounds(),
                                        n = r.height / r.width,
                                        s = t.height / t.width,
                                        u = (e ? n > s : n < s) ? t.width / r.width : t.height / r.height,
                                        h = new ht(new q, new ot(r.width * u, r.height * u));
                                    h.setCenter(t.getCenter()), this.setBounds(h) } }), { _setStyles: function(t, e, r) { var n = this._style,
                                        s = this._matrix; if(n.hasFill() && (t.fillStyle = n.getFillColor()
                                            .toCanvasStyle(t, s)), n.hasStroke()) { t.strokeStyle = n.getStrokeColor()
                                            .toCanvasStyle(t, s), t.lineWidth = n.getStrokeWidth(); var u = n.getStrokeJoin(),
                                            h = n.getStrokeCap(),
                                            o = n.getMiterLimit(); if(u && (t.lineJoin = u), h && (t.lineCap = h), o && (t.miterLimit = o), dt.support.nativeDash) { var l = n.getDashArray(),
                                                f = n.getDashOffset();
                                            l && l.length && ("setLineDash" in t ? (t.setLineDash(l), t.lineDashOffset = f) : (t.mozDash = l, t.mozDashOffset = f)) } } if(n.hasShadow()) { var g = e.pixelRatio || 1,
                                            v = r._shiftless()
                                            .prepend(new lt()
                                                .scale(g, g)),
                                            d = v.transform(new q(n.getShadowBlur(), 0)),
                                            p = v.transform(this.getShadowOffset());
                                        t.shadowColor = n.getShadowColor()
                                            .toCanvasStyle(t), t.shadowBlur = d.getLength(), t.shadowOffsetX = p.x, t.shadowOffsetY = p.y } }, draw: function(t, e, r) { var n = this._updateVersion = this._project._updateVersion; if(!(!this._visible || this._opacity === 0)) { var s = e.matrices,
                                            u = e.viewMatrix,
                                            h = this._matrix,
                                            o = s[s.length - 1].appended(h); if(o.isInvertible()) { u = u ? u.appended(o) : o, s.push(o), e.updateMatrix && (this._globalMatrix = o); var l = this._blendMode,
                                                f = Ft.clamp(this._opacity, 0, 1),
                                                g = l === "normal",
                                                v = hi.nativeModes[l],
                                                d = g && f === 1 || e.dontStart || e.clip || (v || g && f < 1) && this._canComposite(),
                                                p = e.pixelRatio || 1,
                                                x, y, w; if(!d) { var _ = this.getStrokeBounds(u); if(!_.width || !_.height) { s.pop(); return } w = e.offset, y = e.offset = _.getTopLeft()
                                                    .floor(), x = t, t = Kt.getContext(_.getSize()
                                                        .ceil()
                                                        .add(1)
                                                        .multiply(p)), p !== 1 && t.scale(p, p) } t.save(); var A = r ? r.appended(h) : this._canScaleStroke && !this.getStrokeScaling(!0) && u,
                                                c = !d && e.clipItem,
                                                C = !A || c; if(d ? (t.globalAlpha = f, v && (t.globalCompositeOperation = l)) : C && t.translate(-y.x, -y.y), C && (d ? h : u)
                                                .applyToContext(t), c && e.clipItem.draw(t, e.extend({ clip: !0 })), A) { t.setTransform(p, 0, 0, p, 0, 0); var S = e.offset;
                                                S && t.translate(-S.x, -S.y) } this._draw(t, e, u, A), t.restore(), s.pop(), e.clip && !e.dontFinish && t.clip(this.getFillRule()), d || (hi.process(l, t, x, f, y.subtract(w)
                                                .multiply(p)), Kt.release(t), e.offset = w) } } }, _isUpdated: function(t) { var e = this._parent; if(e instanceof oe) return e._isUpdated(t); var r = this._updateVersion === t; return !r && e && e._visible && e._isUpdated(t) && (this._updateVersion = t, r = !0), r }, _drawSelection: function(t, e, r, n, s) { var u = this._selection,
                                        h = u & 1,
                                        o = u & 2 || h && this._selectBounds,
                                        l = u & 4; if(this._drawSelected || (h = !1), (h || o || l) && this._isUpdated(s)) { var f, g = this.getSelectedColor(!0) || (f = this.getLayer()) && f.getSelectedColor(!0),
                                            v = e.appended(this.getGlobalMatrix(!0)),
                                            d = r / 2; if(t.strokeStyle = t.fillStyle = g ? g.toCanvasStyle(t) : "#009dec", h && this._drawSelected(t, v, n), l) { var p = this.getPosition(!0),
                                                x = this._parent,
                                                y = x ? x.localToGlobal(p) : p,
                                                w = y.x,
                                                _ = y.y;
                                            t.beginPath(), t.arc(w, _, d, 0, Math.PI * 2, !0), t.stroke(); for(var A = [
                                                    [0, -1],
                                                    [1, 0],
                                                    [0, 1],
                                                    [-1, 0]
                                                ], c = d, C = r + 1, S = 0; S < 4; S++) { var F = A[S],
                                                    b = F[0],
                                                    B = F[1];
                                                t.moveTo(w + b * c, _ + B * c), t.lineTo(w + b * C, _ + B * C), t.stroke() } } if(o) { var I = v._transformCorners(this.getInternalBounds());
                                            t.beginPath(); for(var S = 0; S < 8; S++) t[S ? "lineTo" : "moveTo"](I[S], I[++S]);
                                            t.closePath(), t.stroke(); for(var S = 0; S < 8; S++) t.fillRect(I[S] - d, I[++S] - d, r, r) } } }, _canComposite: function() { return !1 } }, M.each(["down", "drag", "up", "move"], function(t) { this["removeOn" + M.capitalize(t)] = function() { var e = {}; return e[t] = !0, this.removeOn(e) } }, { removeOn: function(t) { for(var e in t)
                                        if(t[e]) { var r = "mouse" + e,
                                                n = this._project,
                                                s = n._removeSets = n._removeSets || {};
                                            s[r] = s[r] || {}, s[r][this._id] = this } return this } }), { tween: function(t, e, r) { r || (r = e, e = t, t = null, r || (r = e, e = null)); var n = r && r.easing,
                                        s = r && r.start,
                                        u = r != null && (typeof r == "number" ? r : r.duration),
                                        h = new wi(this, t, e, u, n, s);

                                    function o(l) { h._handleFrame(l.time * 1e3), h.running || this.off("frame", o) } return u && this.on("frame", o), h }, tweenTo: function(t, e) { return this.tween(null, t, e) }, tweenFrom: function(t, e) { return this.tween(t, null, e) } }),
                            ae = Ct.extend({ _class: "Group", _selectBounds: !1, _selectChildren: !0, _serializeFields: { children: [] }, initialize: function(e) { this._children = [], this._namedChildren = {}, this._initialize(e) || this.addChildren(Array.isArray(e) ? e : arguments) }, _changed: function t(e) { t.base.call(this, e), e & 2050 && (this._clipItem = tt) }, _getClipItem: function() { var t = this._clipItem; if(t === tt) { t = null; for(var e = this._children, r = 0, n = e.length; r < n; r++)
                                            if(e[r]._clipMask) { t = e[r]; break } this._clipItem = t } return t }, isClipped: function() { return !!this._getClipItem() }, setClipped: function(t) { var e = this.getFirstChild();
                                    e && e.setClipMask(t) }, _getBounds: function t(e, r) { var n = this._getClipItem(); return n ? n._getCachedBounds(n._matrix.prepended(e), M.set({}, r, { stroke: !1 })) : t.base.call(this, e, r) }, _hitTestChildren: function t(e, r, n) { var s = this._getClipItem(); return (!s || s.contains(e)) && t.base.call(this, e, r, n, s) }, _draw: function(t, e) { var r = e.clip,
                                        n = !r && this._getClipItem();
                                    e = e.extend({ clipItem: n, clip: !1 }), r ? (t.beginPath(), e.dontStart = e.dontFinish = !0) : n && n.draw(t, e.extend({ clip: !0 })); for(var s = this._children, u = 0, h = s.length; u < h; u++) { var o = s[u];
                                        o !== n && o.draw(t, e) } } }),
                            Oe = ae.extend({ _class: "Layer", initialize: function() { ae.apply(this, arguments) }, _getOwner: function() { return this._parent || this._index != null && this._project }, isInserted: function t() { return this._parent ? t.base.call(this) : this._index != null }, activate: function() { this._project._activeLayer = this }, _hitTestSelf: function() {} }),
                            ue = Ct.extend({ _class: "Shape", _applyMatrix: !1, _canApplyMatrix: !1, _canScaleStroke: !0, _serializeFields: { type: null, size: null, radius: null }, initialize: function(e, r) { this._initialize(e, r) }, _equals: function(t) { return this._type === t._type && this._size.equals(t._size) && M.equals(this._radius, t._radius) }, copyContent: function(t) { this.setType(t._type), this.setSize(t._size), this.setRadius(t._radius) }, getType: function() { return this._type }, setType: function(t) { this._type = t }, getShape: "#getType", setShape: "#setType", getSize: function() { var t = this._size; return new ee(t.width, t.height, this, "setSize") }, setSize: function() { var t = ot.read(arguments); if(!this._size) this._size = t.clone();
                                    else if(!this._size.equals(t)) { var e = this._type,
                                            r = t.width,
                                            n = t.height;
                                        e === "rectangle" ? this._radius.set(ot.min(this._radius, t.divide(2)
                                            .abs())) : e === "circle" ? (r = n = (r + n) / 2, this._radius = r / 2) : e === "ellipse" && this._radius._set(r / 2, n / 2), this._size._set(r, n), this._changed(9) } }, getRadius: function() { var t = this._radius; return this._type === "circle" ? t : new ee(t.width, t.height, this, "setRadius") }, setRadius: function(t) { var e = this._type; if(e === "circle") { if(t === this._radius) return; var r = t * 2;
                                        this._radius = t, this._size._set(r, r) } else if(t = ot.read(arguments), !this._radius) this._radius = t.clone();
                                    else { if(this._radius.equals(t)) return; if(this._radius.set(t), e === "rectangle") { var r = ot.max(this._size, t.multiply(2));
                                            this._size.set(r) } else e === "ellipse" && this._size._set(t.width * 2, t.height * 2) } this._changed(9) }, isEmpty: function() { return !1 }, toPath: function(t) { var e = new Bt[M.capitalize(this._type)]({ center: new q, size: this._size, radius: this._radius, insert: !1 }); return e.copyAttributes(this), dt.settings.applyMatrix && e.setApplyMatrix(!0), (t === tt || t) && e.insertAbove(this), e }, toShape: "#clone", _asPathItem: function() { return this.toPath(!1) }, _draw: function(t, e, r, n) { var s = this._style,
                                        u = s.hasFill(),
                                        h = s.hasStroke(),
                                        o = e.dontFinish || e.clip,
                                        l = !n; if(u || h || o) { var f = this._type,
                                            g = this._radius,
                                            v = f === "circle"; if(e.dontStart || t.beginPath(), l && v) t.arc(0, 0, g, 0, Math.PI * 2, !0);
                                        else { var d = v ? g : g.width,
                                                p = v ? g : g.height,
                                                x = this._size,
                                                y = x.width,
                                                w = x.height; if(l && f === "rectangle" && d === 0 && p === 0) t.rect(-y / 2, -w / 2, y, w);
                                            else { var _ = y / 2,
                                                    A = w / 2,
                                                    c = 1 - .5522847498307936,
                                                    C = d * c,
                                                    S = p * c,
                                                    F = [-_, -A + p, -_, -A + S, -_ + C, -A, -_ + d, -A, _ - d, -A, _ - C, -A, _, -A + S, _, -A + p, _, A - p, _, A - S, _ - C, A, _ - d, A, -_ + d, A, -_ + C, A, -_, A - S, -_, A - p];
                                                n && n.transform(F, F, 32), t.moveTo(F[0], F[1]), t.bezierCurveTo(F[2], F[3], F[4], F[5], F[6], F[7]), _ !== d && t.lineTo(F[8], F[9]), t.bezierCurveTo(F[10], F[11], F[12], F[13], F[14], F[15]), A !== p && t.lineTo(F[16], F[17]), t.bezierCurveTo(F[18], F[19], F[20], F[21], F[22], F[23]), _ !== d && t.lineTo(F[24], F[25]), t.bezierCurveTo(F[26], F[27], F[28], F[29], F[30], F[31]) } } t.closePath() }!o && (u || h) && (this._setStyles(t, e, r), u && (t.fill(s.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), h && t.stroke()) }, _canComposite: function() { return !(this.hasFill() && this.hasStroke()) }, _getBounds: function(t, e) { var r = new ht(this._size)
                                        .setCenter(0, 0),
                                        n = this._style,
                                        s = e.stroke && n.hasStroke() && n.getStrokeWidth(); return t && (r = t._transformBounds(r)), s ? r.expand(Bt._getStrokePadding(s, this._getStrokeMatrix(t, e))) : r } }, new function() {
                                function t(r, n, s) { var u = r._radius; if(!u.isZero())
                                        for(var h = r._size.divide(2), o = 1; o <= 4; o++) { var l = new q(o > 1 && o < 4 ? -1 : 1, o > 2 ? -1 : 1),
                                                f = l.multiply(h),
                                                g = f.subtract(l.multiply(u)),
                                                v = new ht(s ? f.add(l.multiply(s)) : f, g); if(v.contains(n)) return { point: g, quadrant: o } } }

                                function e(r, n, s, u) { var h = r.divide(n); return (!u || h.isInQuadrant(u)) && h.subtract(h.normalize())
                                        .multiply(n)
                                        .divide(s)
                                        .length <= 1 } return { _contains: function r(n) { if(this._type === "rectangle") { var s = t(this, n); return s ? n.subtract(s.point)
                                                .divide(this._radius)
                                                .getLength() <= 1 : r.base.call(this, n) } else return n.divide(this.size)
                                            .getLength() <= .5 }, _hitTestSelf: function r(n, s, u, h) { var o = !1,
                                            l = this._style,
                                            f = s.stroke && l.hasStroke(),
                                            g = s.fill && l.hasFill(); if(f || g) { var v = this._type,
                                                d = this._radius,
                                                p = f ? l.getStrokeWidth() / 2 : 0,
                                                x = s._tolerancePadding.add(Bt._getStrokePadding(p, !l.getStrokeScaling() && h)); if(v === "rectangle") { var y = x.multiply(2),
                                                    w = t(this, n, y); if(w) o = e(n.subtract(w.point), d, x, w.quadrant);
                                                else { var _ = new ht(this._size)
                                                        .setCenter(0, 0),
                                                        A = _.expand(y),
                                                        c = _.expand(y.negate());
                                                    o = A._containsPoint(n) && !c._containsPoint(n) } } else o = e(n, d, x) } return o ? new xe(f ? "stroke" : "fill", this) : r.base.apply(this, arguments) } } }, { statics: new function() {
                                    function t(e, r, n, s, u) { var h = M.create(ue.prototype); return h._type = e, h._size = n, h._radius = s, h._initialize(M.getNamed(u), r), h } return { Circle: function() { var e = arguments,
                                                r = q.readNamed(e, "center"),
                                                n = M.readNamed(e, "radius"); return t("circle", r, new ot(n * 2), n, e) }, Rectangle: function() { var e = arguments,
                                                r = ht.readNamed(e, "rectangle"),
                                                n = ot.min(ot.readNamed(e, "radius"), r.getSize(!0)
                                                    .divide(2)); return t("rectangle", r.getCenter(!0), r.getSize(!0), n, e) }, Ellipse: function() { var e = arguments,
                                                r = ue._readEllipse(e),
                                                n = r.radius; return t("ellipse", r.center, n.multiply(2), n, e) }, _readEllipse: function(e) { var r, n; if(M.hasNamed(e, "radius")) r = q.readNamed(e, "center"), n = ot.readNamed(e, "radius");
                                            else { var s = ht.readNamed(e, "rectangle");
                                                r = s.getCenter(!0), n = s.getSize(!0)
                                                    .divide(2) } return { center: r, radius: n } } } } }),
                            re = Ct.extend({ _class: "Raster", _applyMatrix: !1, _canApplyMatrix: !1, _boundsOptions: { stroke: !1, handle: !1 }, _serializeFields: { crossOrigin: null, source: null }, _prioritize: ["crossOrigin"], _smoothing: "low", beans: !0, initialize: function(e, r) { if(!this._initialize(e, r !== tt && q.read(arguments))) { var n, s = typeof e,
                                            u = s === "string" ? kt.getElementById(e) : s === "object" ? e : null; if(u && u !== Ct.NO_INSERT) { if(u.getContext || u.naturalHeight != null) n = u;
                                            else if(u) { var h = ot.read(arguments);
                                                h.isZero() || (n = Kt.getCanvas(h)) } } n ? this.setImage(n) : this.setSource(e) } this._size || (this._size = new ot, this._loaded = !1) }, _equals: function(t) { return this.getSource() === t.getSource() }, copyContent: function(t) { var e = t._image,
                                        r = t._canvas; if(e) this._setImage(e);
                                    else if(r) { var n = Kt.getCanvas(t._size);
                                        n.getContext("2d")
                                            .drawImage(r, 0, 0), this._setImage(n) } this._crossOrigin = t._crossOrigin }, getSize: function() { var t = this._size; return new ee(t ? t.width : 0, t ? t.height : 0, this, "setSize") }, setSize: function(t, e) { var r = ot.read(arguments); if(r.equals(this._size)) e && this.clear();
                                    else if(r.width > 0 && r.height > 0) { var n = !e && this.getElement();
                                        this._setImage(Kt.getCanvas(r)), n && this.getContext(!0)
                                            .drawImage(n, 0, 0, r.width, r.height) } else this._canvas && Kt.release(this._canvas), this._size = r.clone() }, getWidth: function() { return this._size ? this._size.width : 0 }, setWidth: function(t) { this.setSize(t, this.getHeight()) }, getHeight: function() { return this._size ? this._size.height : 0 }, setHeight: function(t) { this.setSize(this.getWidth(), t) }, getLoaded: function() { return this._loaded }, isEmpty: function() { var t = this._size; return !t || t.width === 0 && t.height === 0 }, getResolution: function() { var t = this._matrix,
                                        e = new q(0, 0)
                                        .transform(t),
                                        r = new q(1, 0)
                                        .transform(t)
                                        .subtract(e),
                                        n = new q(0, 1)
                                        .transform(t)
                                        .subtract(e); return new ot(72 / r.getLength(), 72 / n.getLength()) }, getPpi: "#getResolution", getImage: function() { return this._image }, setImage: function(t) { var e = this;

                                    function r(n) { var s = e.getView(),
                                            u = n && n.type || "load";
                                        s && e.responds(u) && (dt = s._scope, e.emit(u, new Me(n))) } this._setImage(t), this._loaded ? setTimeout(r, 0) : t && Zt.add(t, { load: function(n) { e._setImage(t), r(n) }, error: r }) }, _setImage: function(t) { this._canvas && Kt.release(this._canvas), t && t.getContext ? (this._image = null, this._canvas = t, this._loaded = !0) : (this._image = t, this._canvas = null, this._loaded = !!(t && t.src && t.complete)), this._size = new ot(t ? t.naturalWidth || t.width : 0, t ? t.naturalHeight || t.height : 0), this._context = null, this._changed(1033) }, getCanvas: function() { if(!this._canvas) { var t = Kt.getContext(this._size); try { this._image && t.drawImage(this._image, 0, 0), this._canvas = t.canvas } catch { Kt.release(t) } } return this._canvas }, setCanvas: "#setImage", getContext: function(t) { return this._context || (this._context = this.getCanvas()
                                        .getContext("2d")), t && (this._image = null, this._changed(1025)), this._context }, setContext: function(t) { this._context = t }, getSource: function() { var t = this._image; return t && t.src || this.toDataURL() }, setSource: function(t) { var e = new Ht.Image,
                                        r = this._crossOrigin;
                                    r && (e.crossOrigin = r), t && (e.src = t), this.setImage(e) }, getCrossOrigin: function() { var t = this._image; return t && t.crossOrigin || this._crossOrigin || "" }, setCrossOrigin: function(t) { this._crossOrigin = t; var e = this._image;
                                    e && (e.crossOrigin = t) }, getSmoothing: function() { return this._smoothing }, setSmoothing: function(t) { this._smoothing = typeof t == "string" ? t : t ? "low" : "off", this._changed(257) }, getElement: function() { return this._canvas || this._loaded && this._image } }, { beans: !1, getSubCanvas: function() { var t = ht.read(arguments),
                                        e = Kt.getContext(t.getSize()); return e.drawImage(this.getCanvas(), t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), e.canvas }, getSubRaster: function() { var t = ht.read(arguments),
                                        e = new re(Ct.NO_INSERT); return e._setImage(this.getSubCanvas(t)), e.translate(t.getCenter()
                                        .subtract(this.getSize()
                                            .divide(2))), e._matrix.prepend(this._matrix), e.insertAbove(this), e }, toDataURL: function() { var t = this._image,
                                        e = t && t.src; if(/^data:/.test(e)) return e; var r = this.getCanvas(); return r ? r.toDataURL.apply(r, arguments) : null }, drawImage: function(t) { var e = q.read(arguments, 1);
                                    this.getContext(!0)
                                        .drawImage(t, e.x, e.y) }, getAverageColor: function(t) { var e, r; if(t ? t instanceof ge ? (r = t, e = t.getBounds()) : typeof t == "object" && ("width" in t ? e = new ht(t) : "x" in t && (e = new ht(t.x - .5, t.y - .5, 1, 1))) : e = this.getBounds(), !e) return null; var n = 32,
                                        s = Math.min(e.width, n),
                                        u = Math.min(e.height, n),
                                        h = re._sampleContext;
                                    h ? h.clearRect(0, 0, n + 1, n + 1) : h = re._sampleContext = Kt.getContext(new ot(n)), h.save(); var o = new lt()
                                        .scale(s / e.width, u / e.height)
                                        .translate(-e.x, -e.y);
                                    o.applyToContext(h), r && r.draw(h, new M({ clip: !0, matrices: [o] })), this._matrix.applyToContext(h); var l = this.getElement(),
                                        f = this._size;
                                    l && h.drawImage(l, -f.width / 2, -f.height / 2), h.restore(); for(var g = h.getImageData(.5, .5, Math.ceil(s), Math.ceil(u))
                                            .data, v = [0, 0, 0], d = 0, p = 0, x = g.length; p < x; p += 4) { var y = g[p + 3];
                                        d += y, y /= 255, v[0] += g[p] * y, v[1] += g[p + 1] * y, v[2] += g[p + 2] * y } for(var p = 0; p < 3; p++) v[p] /= d; return d ? Yt.read(v) : null }, getPixel: function() { var t = q.read(arguments),
                                        e = this.getContext()
                                        .getImageData(t.x, t.y, 1, 1)
                                        .data; return new Yt("rgb", [e[0] / 255, e[1] / 255, e[2] / 255], e[3] / 255) }, setPixel: function() { var t = arguments,
                                        e = q.read(t),
                                        r = Yt.read(t),
                                        n = r._convert("rgb"),
                                        s = r._alpha,
                                        u = this.getContext(!0),
                                        h = u.createImageData(1, 1),
                                        o = h.data;
                                    o[0] = n[0] * 255, o[1] = n[1] * 255, o[2] = n[2] * 255, o[3] = s != null ? s * 255 : 255, u.putImageData(h, e.x, e.y) }, clear: function() { var t = this._size;
                                    this.getContext(!0)
                                        .clearRect(0, 0, t.width + 1, t.height + 1) }, createImageData: function() { var t = ot.read(arguments); return this.getContext()
                                        .createImageData(t.width, t.height) }, getImageData: function() { var t = ht.read(arguments); return t.isEmpty() && (t = new ht(this._size)), this.getContext()
                                        .getImageData(t.x, t.y, t.width, t.height) }, putImageData: function(t) { var e = q.read(arguments, 1);
                                    this.getContext(!0)
                                        .putImageData(t, e.x, e.y) }, setImageData: function(t) { this.setSize(t), this.getContext(!0)
                                        .putImageData(t, 0, 0) }, _getBounds: function(t, e) { var r = new ht(this._size)
                                        .setCenter(0, 0); return t ? t._transformBounds(r) : r }, _hitTestSelf: function(t) { if(this._contains(t)) { var e = this; return new xe("pixel", e, { offset: t.add(e._size.divide(2))
                                                .round(), color: { get: function() { return e.getPixel(this.offset) } } }) } }, _draw: function(t, e, r) { var n = this.getElement(); if(n && n.width > 0 && n.height > 0) { t.globalAlpha = Ft.clamp(this._opacity, 0, 1), this._setStyles(t, e, r); var s = this._smoothing,
                                            u = s === "off";
                                        Vt.setPrefixed(t, u ? "imageSmoothingEnabled" : "imageSmoothingQuality", u ? !1 : s), t.drawImage(n, -this._size.width / 2, -this._size.height / 2) } }, _canComposite: function() { return !0 } }),
                            si = Ct.extend({ _class: "SymbolItem", _applyMatrix: !1, _canApplyMatrix: !1, _boundsOptions: { stroke: !0 }, _serializeFields: { symbol: null }, initialize: function(e, r) { this._initialize(e, r !== tt && q.read(arguments, 1)) || this.setDefinition(e instanceof Se ? e : new Se(e)) }, _equals: function(t) { return this._definition === t._definition }, copyContent: function(t) { this.setDefinition(t._definition) }, getDefinition: function() { return this._definition }, setDefinition: function(t) { this._definition = t, this._changed(9) }, getSymbol: "#getDefinition", setSymbol: "#setDefinition", isEmpty: function() { return this._definition._item.isEmpty() }, _getBounds: function(t, e) { var r = this._definition._item; return r._getCachedBounds(r._matrix.prepended(t), e) }, _hitTestSelf: function(t, e, r) { var n = e.extend({ all: !1 }),
                                        s = this._definition._item._hitTest(t, n, r); return s && (s.item = this), s }, _draw: function(t, e) { this._definition._item.draw(t, e) } }),
                            Se = M.extend({ _class: "SymbolDefinition", initialize: function(e, r) { this._id = de.get(), this.project = dt.project, e && this.setItem(e, r) }, _serialize: function(t, e) { return e.add(this, function() { return M.serialize([this._class, this._item], t, !1, e) }) }, _changed: function(t) { t & 8 && Ct._clearBoundsCache(this), t & 1 && this.project._changed(t) }, getItem: function() { return this._item }, setItem: function(t, e) { t._symbol && (t = t.clone()), this._item && (this._item._symbol = null), this._item = t, t.remove(), t.setSelected(!1), e || t.setPosition(new q), t._symbol = this, this._changed(9) }, getDefinition: "#getItem", setDefinition: "#setItem", place: function(t) { return new si(this, t) }, clone: function() { return new Se(this._item.clone(!1)) }, equals: function(t) { return t === this || t && this._item.equals(t._item) || !1 } }),
                            xe = M.extend({ _class: "HitResult", initialize: function(e, r, n) { this.type = e, this.item = r, n && this.inject(n) }, statics: { getOptions: function(t) { var e = t && M.read(t); return new M({ type: null, tolerance: dt.settings.hitTolerance, fill: !e, stroke: !e, segments: !e, handles: !1, ends: !1, position: !1, center: !1, bounds: !1, guides: !1, selected: !1 }, e) } } }),
                            ct = M.extend({ _class: "Segment", beans: !0, _selection: 0, initialize: function(e, r, n, s, u, h) { var o = arguments.length,
                                        l, f, g, v;
                                    o > 0 && (e == null || typeof e == "object" ? o === 1 && e && "point" in e ? (l = e.point, f = e.handleIn, g = e.handleOut, v = e.selection) : (l = e, f = r, g = n, v = s) : (l = [e, r], f = n !== tt ? [n, s] : null, g = u !== tt ? [u, h] : null)), new ai(l, this, "_point"), new ai(f, this, "_handleIn"), new ai(g, this, "_handleOut"), v && this.setSelection(v) }, _serialize: function(t, e) { var r = this._point,
                                        n = this._selection,
                                        s = n || this.hasHandles() ? [r, this._handleIn, this._handleOut] : r; return n && s.push(n), M.serialize(s, t, !0, e) }, _changed: function(t) { var e = this._path; if(e) { var r = e._curves,
                                            n = this._index,
                                            s;
                                        r && ((!t || t === this._point || t === this._handleIn) && (s = n > 0 ? r[n - 1] : e._closed ? r[r.length - 1] : null) && s._changed(), (!t || t === this._point || t === this._handleOut) && (s = r[n]) && s._changed()), e._changed(41) } }, getPoint: function() { return this._point }, setPoint: function() { this._point.set(q.read(arguments)) }, getHandleIn: function() { return this._handleIn }, setHandleIn: function() { this._handleIn.set(q.read(arguments)) }, getHandleOut: function() { return this._handleOut }, setHandleOut: function() { this._handleOut.set(q.read(arguments)) }, hasHandles: function() { return !this._handleIn.isZero() || !this._handleOut.isZero() }, isSmooth: function() { var t = this._handleIn,
                                        e = this._handleOut; return !t.isZero() && !e.isZero() && t.isCollinear(e) }, clearHandles: function() { this._handleIn._set(0, 0), this._handleOut._set(0, 0) }, getSelection: function() { return this._selection }, setSelection: function(t) { var e = this._selection,
                                        r = this._path;
                                    this._selection = t = t || 0, r && t !== e && (r._updateSelection(this, e, t), r._changed(257)) }, _changeSelection: function(t, e) { var r = this._selection;
                                    this.setSelection(e ? r | t : r & ~t) }, isSelected: function() { return !!(this._selection & 7) }, setSelected: function(t) { this._changeSelection(7, t) }, getIndex: function() { return this._index !== tt ? this._index : null }, getPath: function() { return this._path || null }, getCurve: function() { var t = this._path,
                                        e = this._index; return t ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--, t.getCurves()[e] || null) : null }, getLocation: function() { var t = this.getCurve(); return t ? new $t(t, this === t._segment1 ? 0 : 1) : null }, getNext: function() { var t = this._path && this._path._segments; return t && (t[this._index + 1] || this._path._closed && t[0]) || null }, smooth: function(t, e, r) { var n = t || {},
                                        s = n.type,
                                        u = n.factor,
                                        h = this.getPrevious(),
                                        o = this.getNext(),
                                        l = (h || this)
                                        ._point,
                                        f = this._point,
                                        g = (o || this)
                                        ._point,
                                        v = l.getDistance(f),
                                        d = f.getDistance(g); if(!s || s === "catmull-rom") { var p = u === tt ? .5 : u,
                                            x = Math.pow(v, p),
                                            y = x * x,
                                            w = Math.pow(d, p),
                                            _ = w * w; if(!e && h) { var A = 2 * _ + 3 * w * x + y,
                                                c = 3 * w * (w + x);
                                            this.setHandleIn(c !== 0 ? new q((_ * l._x + A * f._x - y * g._x) / c - f._x, (_ * l._y + A * f._y - y * g._y) / c - f._y) : new q) } if(!r && o) { var A = 2 * y + 3 * x * w + _,
                                                c = 3 * x * (x + w);
                                            this.setHandleOut(c !== 0 ? new q((y * g._x + A * f._x - _ * l._x) / c - f._x, (y * g._y + A * f._y - _ * l._y) / c - f._y) : new q) } } else if(s === "geometric") { if(h && o) { var C = l.subtract(g),
                                                S = u === tt ? .4 : u,
                                                F = S * v / (v + d);
                                            e || this.setHandleIn(C.multiply(F)), r || this.setHandleOut(C.multiply(F - S)) } } else throw new Error("Smoothing method '" + s + "' not supported.") }, getPrevious: function() { var t = this._path && this._path._segments; return t && (t[this._index - 1] || this._path._closed && t[t.length - 1]) || null }, isFirst: function() { return !this._index }, isLast: function() { var t = this._path; return t && this._index === t._segments.length - 1 || !1 }, reverse: function() { var t = this._handleIn,
                                        e = this._handleOut,
                                        r = t.clone();
                                    t.set(e), e.set(r) }, reversed: function() { return new ct(this._point, this._handleOut, this._handleIn) }, remove: function() { return this._path ? !!this._path.removeSegment(this._index) : !1 }, clone: function() { return new ct(this._point, this._handleIn, this._handleOut) }, equals: function(t) { return t === this || t && this._class === t._class && this._point.equals(t._point) && this._handleIn.equals(t._handleIn) && this._handleOut.equals(t._handleOut) || !1 }, toString: function() { var t = ["point: " + this._point]; return this._handleIn.isZero() || t.push("handleIn: " + this._handleIn), this._handleOut.isZero() || t.push("handleOut: " + this._handleOut), "{ " + t.join(", ") + " }" }, transform: function(t) { this._transformCoordinates(t, new Array(6), !0), this._changed() }, interpolate: function(t, e, r) { var n = 1 - r,
                                        s = r,
                                        u = t._point,
                                        h = e._point,
                                        o = t._handleIn,
                                        l = e._handleIn,
                                        f = e._handleOut,
                                        g = t._handleOut;
                                    this._point._set(n * u._x + s * h._x, n * u._y + s * h._y, !0), this._handleIn._set(n * o._x + s * l._x, n * o._y + s * l._y, !0), this._handleOut._set(n * g._x + s * f._x, n * g._y + s * f._y, !0), this._changed() }, _transformCoordinates: function(t, e, r) { var n = this._point,
                                        s = !r || !this._handleIn.isZero() ? this._handleIn : null,
                                        u = !r || !this._handleOut.isZero() ? this._handleOut : null,
                                        h = n._x,
                                        o = n._y,
                                        l = 2; return e[0] = h, e[1] = o, s && (e[l++] = s._x + h, e[l++] = s._y + o), u && (e[l++] = u._x + h, e[l++] = u._y + o), t && (t._transformCoordinates(e, e, l / 2), h = e[0], o = e[1], r ? (n._x = h, n._y = o, l = 2, s && (s._x = e[l++] - h, s._y = e[l++] - o), u && (u._x = e[l++] - h, u._y = e[l++] - o)) : (s || (e[l++] = h, e[l++] = o), u || (e[l++] = h, e[l++] = o))), e } }),
                            ai = q.extend({ initialize: function(e, r, n) { var s, u, h; if(!e) s = u = 0;
                                    else if((s = e[0]) !== tt) u = e[1];
                                    else { var o = e;
                                        (s = o.x) === tt && (o = q.read(arguments), s = o.x), u = o.y, h = o.selected } this._x = s, this._y = u, this._owner = r, r[n] = this, h && this.setSelected(!0) }, _set: function(t, e) { return this._x = t, this._y = e, this._owner._changed(this), this }, getX: function() { return this._x }, setX: function(t) { this._x = t, this._owner._changed(this) }, getY: function() { return this._y }, setY: function(t) { this._y = t, this._owner._changed(this) }, isZero: function() { var t = Ft.isZero; return t(this._x) && t(this._y) }, isSelected: function() { return !!(this._owner._selection & this._getSelection()) }, setSelected: function(t) { this._owner._changeSelection(this._getSelection(), t) }, _getSelection: function() { var t = this._owner; return this === t._point ? 1 : this === t._handleIn ? 2 : this === t._handleOut ? 4 : 0 } }),
                            it = M.extend({ _class: "Curve", beans: !0, initialize: function(e, r, n, s, u, h, o, l) { var f = arguments.length,
                                        g, v, d, p, x, y;
                                    f === 3 ? (this._path = e, g = r, v = n) : f ? f === 1 ? "segment1" in e ? (g = new ct(e.segment1), v = new ct(e.segment2)) : "point1" in e ? (d = e.point1, x = e.handle1, y = e.handle2, p = e.point2) : Array.isArray(e) && (d = [e[0], e[1]], p = [e[6], e[7]], x = [e[2] - e[0], e[3] - e[1]], y = [e[4] - e[6], e[5] - e[7]]) : f === 2 ? (g = new ct(e), v = new ct(r)) : f === 4 ? (d = e, x = r, y = n, p = s) : f === 8 && (d = [e, r], p = [o, l], x = [n - e, s - r], y = [u - o, h - l]) : (g = new ct, v = new ct), this._segment1 = g || new ct(d, null, x), this._segment2 = v || new ct(p, y, null) }, _serialize: function(t, e) { return M.serialize(this.hasHandles() ? [this.getPoint1(), this.getHandle1(), this.getHandle2(), this.getPoint2()] : [this.getPoint1(), this.getPoint2()], t, !0, e) }, _changed: function() { this._length = this._bounds = tt }, clone: function() { return new it(this._segment1, this._segment2) }, toString: function() { var t = ["point1: " + this._segment1._point]; return this._segment1._handleOut.isZero() || t.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || t.push("handle2: " + this._segment2._handleIn), t.push("point2: " + this._segment2._point), "{ " + t.join(", ") + " }" }, classify: function() { return it.classify(this.getValues()) }, remove: function() { var t = !1; if(this._path) { var e = this._segment2,
                                            r = e._handleOut;
                                        t = e.remove(), t && this._segment1._handleOut.set(r) } return t }, getPoint1: function() { return this._segment1._point }, setPoint1: function() { this._segment1._point.set(q.read(arguments)) }, getPoint2: function() { return this._segment2._point }, setPoint2: function() { this._segment2._point.set(q.read(arguments)) }, getHandle1: function() { return this._segment1._handleOut }, setHandle1: function() { this._segment1._handleOut.set(q.read(arguments)) }, getHandle2: function() { return this._segment2._handleIn }, setHandle2: function() { this._segment2._handleIn.set(q.read(arguments)) }, getSegment1: function() { return this._segment1 }, getSegment2: function() { return this._segment2 }, getPath: function() { return this._path }, getIndex: function() { return this._segment1._index }, getNext: function() { var t = this._path && this._path._curves; return t && (t[this._segment1._index + 1] || this._path._closed && t[0]) || null }, getPrevious: function() { var t = this._path && this._path._curves; return t && (t[this._segment1._index - 1] || this._path._closed && t[t.length - 1]) || null }, isFirst: function() { return !this._segment1._index }, isLast: function() { var t = this._path; return t && this._segment1._index === t._curves.length - 1 || !1 }, isSelected: function() { return this.getPoint1()
                                        .isSelected() && this.getHandle1()
                                        .isSelected() && this.getHandle2()
                                        .isSelected() && this.getPoint2()
                                        .isSelected() }, setSelected: function(t) { this.getPoint1()
                                        .setSelected(t), this.getHandle1()
                                        .setSelected(t), this.getHandle2()
                                        .setSelected(t), this.getPoint2()
                                        .setSelected(t) }, getValues: function(t) { return it.getValues(this._segment1, this._segment2, t) }, getPoints: function() { for(var t = this.getValues(), e = [], r = 0; r < 8; r += 2) e.push(new q(t[r], t[r + 1])); return e } }, { getLength: function() { return this._length == null && (this._length = it.getLength(this.getValues(), 0, 1)), this._length }, getArea: function() { return it.getArea(this.getValues()) }, getLine: function() { return new k(this._segment1._point, this._segment2._point) }, getPart: function(t, e) { return new it(it.getPart(this.getValues(), t, e)) }, getPartLength: function(t, e) { return it.getLength(this.getValues(), t, e) }, divideAt: function(t) { return this.divideAtTime(t && t.curve === this ? t.time : this.getTimeAt(t)) }, divideAtTime: function(t, e) { var r = 1e-8,
                                        n = 1 - r,
                                        s = null; if(t >= r && t <= n) { var u = it.subdivide(this.getValues(), t),
                                            h = u[0],
                                            o = u[1],
                                            l = e || this.hasHandles(),
                                            f = this._segment1,
                                            g = this._segment2,
                                            v = this._path;
                                        l && (f._handleOut._set(h[2] - h[0], h[3] - h[1]), g._handleIn._set(o[4] - o[6], o[5] - o[7])); var d = h[6],
                                            p = h[7],
                                            x = new ct(new q(d, p), l && new q(h[4] - d, h[5] - p), l && new q(o[2] - d, o[3] - p));
                                        v ? (v.insert(f._index + 1, x), s = this.getNext()) : (this._segment2 = x, this._changed(), s = new it(x, g)) } return s }, splitAt: function(t) { var e = this._path; return e ? e.splitAt(t) : null }, splitAtTime: function(t) { return this.splitAt(this.getLocationAtTime(t)) }, divide: function(t, e) { return this.divideAtTime(t === tt ? .5 : e ? t : this.getTimeAt(t)) }, split: function(t, e) { return this.splitAtTime(t === tt ? .5 : e ? t : this.getTimeAt(t)) }, reversed: function() { return new it(this._segment2.reversed(), this._segment1.reversed()) }, clearHandles: function() { this._segment1._handleOut._set(0, 0), this._segment2._handleIn._set(0, 0) }, statics: { getValues: function(t, e, r, n) { var s = t._point,
                                            u = t._handleOut,
                                            h = e._handleIn,
                                            o = e._point,
                                            l = s.x,
                                            f = s.y,
                                            g = o.x,
                                            v = o.y,
                                            d = n ? [l, f, l, f, g, v, g, v] : [l, f, l + u._x, f + u._y, g + h._x, v + h._y, g, v]; return r && r._transformCoordinates(d, d, 4), d }, subdivide: function(t, e) { var r = t[0],
                                            n = t[1],
                                            s = t[2],
                                            u = t[3],
                                            h = t[4],
                                            o = t[5],
                                            l = t[6],
                                            f = t[7];
                                        e === tt && (e = .5); var g = 1 - e,
                                            v = g * r + e * s,
                                            d = g * n + e * u,
                                            p = g * s + e * h,
                                            x = g * u + e * o,
                                            y = g * h + e * l,
                                            w = g * o + e * f,
                                            _ = g * v + e * p,
                                            A = g * d + e * x,
                                            c = g * p + e * y,
                                            C = g * x + e * w,
                                            S = g * _ + e * c,
                                            F = g * A + e * C; return [
                                            [r, n, v, d, _, A, S, F],
                                            [S, F, c, C, y, w, l, f]
                                        ] }, getMonoCurves: function(t, e) { var r = [],
                                            n = e ? 0 : 1,
                                            s = t[n + 0],
                                            u = t[n + 2],
                                            h = t[n + 4],
                                            o = t[n + 6]; if(s >= u == u >= h && u >= h == h >= o || it.isStraight(t)) r.push(t);
                                        else { var l = 3 * (u - h) - s + o,
                                                f = 2 * (s + h) - 4 * u,
                                                g = u - s,
                                                v = 1e-8,
                                                d = 1 - v,
                                                p = [],
                                                x = Ft.solveQuadratic(l, f, g, p, v, d); if(!x) r.push(t);
                                            else { p.sort(); var y = p[0],
                                                    w = it.subdivide(t, y);
                                                r.push(w[0]), x > 1 && (y = (p[1] - y) / (1 - y), w = it.subdivide(w[1], y), r.push(w[0])), r.push(w[1]) } } return r }, solveCubic: function(t, e, r, n, s, u) { var h = t[e],
                                            o = t[e + 2],
                                            l = t[e + 4],
                                            f = t[e + 6],
                                            g = 0; if(!(h < r && f < r && o < r && l < r || h > r && f > r && o > r && l > r)) { var v = 3 * (o - h),
                                                d = 3 * (l - o) - v,
                                                p = f - h - v - d;
                                            g = Ft.solveCubic(p, d, v, h - r, n, s, u) } return g }, getTimeOf: function(t, e) { var r = new q(t[0], t[1]),
                                            n = new q(t[6], t[7]),
                                            s = 1e-12,
                                            u = 1e-7,
                                            h = e.isClose(r, s) ? 0 : e.isClose(n, s) ? 1 : null; if(h === null)
                                            for(var o = [e.x, e.y], l = [], f = 0; f < 2; f++)
                                                for(var g = it.solveCubic(t, f, o[f], l, 0, 1), v = 0; v < g; v++) { var d = l[v]; if(e.isClose(it.getPoint(t, d), u)) return d }
                                        return e.isClose(r, u) ? 0 : e.isClose(n, u) ? 1 : null }, getNearestTime: function(t, e) { if(it.isStraight(t)) { var r = t[0],
                                                n = t[1],
                                                s = t[6],
                                                u = t[7],
                                                h = s - r,
                                                o = u - n,
                                                l = h * h + o * o; if(l === 0) return 0; var f = ((e.x - r) * h + (e.y - n) * o) / l; return f < 1e-12 ? 0 : f > .999999999999 ? 1 : it.getTimeOf(t, new q(r + f * h, n + f * o)) } var g = 100,
                                            v = 1 / 0,
                                            d = 0;

                                        function p(w) { if(w >= 0 && w <= 1) { var _ = e.getDistance(it.getPoint(t, w), !0); if(_ < v) return v = _, d = w, !0 } } for(var x = 0; x <= g; x++) p(x / g); for(var y = 1 / (g * 2); y > 1e-8;) !p(d - y) && !p(d + y) && (y /= 2); return d }, getPart: function(t, e, r) { var n = e > r; if(n) { var s = e;
                                            e = r, r = s } return e > 0 && (t = it.subdivide(t, e)[1]), r < 1 && (t = it.subdivide(t, (r - e) / (1 - e))[0]), n ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t }, isFlatEnough: function(t, e) { var r = t[0],
                                            n = t[1],
                                            s = t[2],
                                            u = t[3],
                                            h = t[4],
                                            o = t[5],
                                            l = t[6],
                                            f = t[7],
                                            g = 3 * s - 2 * r - l,
                                            v = 3 * u - 2 * n - f,
                                            d = 3 * h - 2 * l - r,
                                            p = 3 * o - 2 * f - n; return Math.max(g * g, d * d) + Math.max(v * v, p * p) <= 16 * e * e }, getArea: function(t) { var e = t[0],
                                            r = t[1],
                                            n = t[2],
                                            s = t[3],
                                            u = t[4],
                                            h = t[5],
                                            o = t[6],
                                            l = t[7]; return 3 * ((l - r) * (n + u) - (o - e) * (s + h) + s * (e - u) - n * (r - h) + l * (u + e / 3) - o * (h + r / 3)) / 20 }, getBounds: function(t) { for(var e = t.slice(0, 2), r = e.slice(), n = [0, 0], s = 0; s < 2; s++) it._addBounds(t[s], t[s + 2], t[s + 4], t[s + 6], s, 0, e, r, n); return new ht(e[0], e[1], r[0] - e[0], r[1] - e[1]) }, _addBounds: function(t, e, r, n, s, u, h, o, l) {
                                        function f(S, F) { var b = S - F,
                                                B = S + F;
                                            b < h[s] && (h[s] = b), B > o[s] && (o[s] = B) } u /= 2; var g = h[s] + u,
                                            v = o[s] - u; if(t < g || e < g || r < g || n < g || t > v || e > v || r > v || n > v)
                                            if(e < t != e < n && r < t != r < n) f(t, 0), f(n, 0);
                                            else { var d = 3 * (e - r) - t + n,
                                                    p = 2 * (t + r) - 4 * e,
                                                    x = e - t,
                                                    y = Ft.solveQuadratic(d, p, x, l),
                                                    w = 1e-8,
                                                    _ = 1 - w;
                                                f(n, 0); for(var A = 0; A < y; A++) { var c = l[A],
                                                        C = 1 - c;
                                                    w <= c && c <= _ && f(C * C * C * t + 3 * C * C * c * e + 3 * C * c * c * r + c * c * c * n, u) } } } } }, M.each(["getBounds", "getStrokeBounds", "getHandleBounds"], function(t) { this[t] = function() { this._bounds || (this._bounds = {}); var e = this._bounds[t]; return e || (e = this._bounds[t] = Bt[t]([this._segment1, this._segment2], !1, this._path)), e.clone() } }, {}), M.each({ isStraight: function(t, e, r, n) { if(e.isZero() && r.isZero()) return !0; var s = n.subtract(t); if(s.isZero()) return !1; if(s.isCollinear(e) && s.isCollinear(r)) { var u = new k(t, n),
                                            h = 1e-7; if(u.getDistance(t.add(e)) < h && u.getDistance(n.add(r)) < h) { var o = s.dot(s),
                                                l = s.dot(e) / o,
                                                f = s.dot(r) / o; return l >= 0 && l <= 1 && f <= 0 && f >= -1 } } return !1 }, isLinear: function(t, e, r, n) { var s = n.subtract(t)
                                        .divide(3); return e.equals(s) && r.negate()
                                        .equals(s) } }, function(t, e) { this[e] = function(r) { var n = this._segment1,
                                        s = this._segment2; return t(n._point, n._handleOut, s._handleIn, s._point, r) }, this.statics[e] = function(r, n) { var s = r[0],
                                        u = r[1],
                                        h = r[6],
                                        o = r[7]; return t(new q(s, u), new q(r[2] - s, r[3] - u), new q(r[4] - h, r[5] - o), new q(h, o), n) } }, { statics: {}, hasHandles: function() { return !this._segment1._handleOut.isZero() || !this._segment2._handleIn.isZero() }, hasLength: function(t) { return (!this.getPoint1()
                                        .equals(this.getPoint2()) || this.hasHandles()) && this.getLength() > (t || 0) }, isCollinear: function(t) { return t && this.isStraight() && t.isStraight() && this.getLine()
                                        .isCollinear(t.getLine()) }, isHorizontal: function() { return this.isStraight() && Math.abs(this.getTangentAtTime(.5)
                                        .y) < 1e-8 }, isVertical: function() { return this.isStraight() && Math.abs(this.getTangentAtTime(.5)
                                        .x) < 1e-8 } }), { beans: !1, getLocationAt: function(t, e) { return this.getLocationAtTime(e ? t : this.getTimeAt(t)) }, getLocationAtTime: function(t) { return t != null && t >= 0 && t <= 1 ? new $t(this, t) : null }, getTimeAt: function(t, e) { return it.getTimeAt(this.getValues(), t, e) }, getParameterAt: "#getTimeAt", getTimesWithTangent: function() { var t = q.read(arguments); return t.isZero() ? [] : it.getTimesWithTangent(this.getValues(), t) }, getOffsetAtTime: function(t) { return this.getPartLength(0, t) }, getLocationOf: function() { return this.getLocationAtTime(this.getTimeOf(q.read(arguments))) }, getOffsetOf: function() { var t = this.getLocationOf.apply(this, arguments); return t ? t.getOffset() : null }, getTimeOf: function() { return it.getTimeOf(this.getValues(), q.read(arguments)) }, getParameterOf: "#getTimeOf", getNearestLocation: function() { var t = q.read(arguments),
                                        e = this.getValues(),
                                        r = it.getNearestTime(e, t),
                                        n = it.getPoint(e, r); return new $t(this, r, n, null, t.getDistance(n)) }, getNearestPoint: function() { var t = this.getNearestLocation.apply(this, arguments); return t && t.getPoint() } }, new function() { var t = ["getPoint", "getTangent", "getNormal", "getWeightedTangent", "getWeightedNormal", "getCurvature"]; return M.each(t, function(e) { this[e + "At"] = function(r, n) { var s = this.getValues(); return it[e](s, n ? r : it.getTimeAt(s, r)) }, this[e + "AtTime"] = function(r) { return it[e](this.getValues(), r) } }, { statics: { _evaluateMethods: t } }) }, new function() {
                                function t(n) { var s = n[0],
                                        u = n[1],
                                        h = n[2],
                                        o = n[3],
                                        l = n[4],
                                        f = n[5],
                                        g = n[6],
                                        v = n[7],
                                        d = 9 * (h - l) + 3 * (g - s),
                                        p = 6 * (s + l) - 12 * h,
                                        x = 3 * (h - s),
                                        y = 9 * (o - f) + 3 * (v - u),
                                        w = 6 * (u + f) - 12 * o,
                                        _ = 3 * (o - u); return function(A) { var c = (d * A + p) * A + x,
                                            C = (y * A + w) * A + _; return Math.sqrt(c * c + C * C) } }

                                function e(n, s) { return Math.max(2, Math.min(16, Math.ceil(Math.abs(s - n) * 32))) }

                                function r(n, s, u, h) { if(s == null || s < 0 || s > 1) return null; var o = n[0],
                                        l = n[1],
                                        f = n[2],
                                        g = n[3],
                                        v = n[4],
                                        d = n[5],
                                        p = n[6],
                                        x = n[7],
                                        y = Ft.isZero;
                                    y(f - o) && y(g - l) && (f = o, g = l), y(v - p) && y(d - x) && (v = p, d = x); var w = 3 * (f - o),
                                        _ = 3 * (v - f) - w,
                                        A = p - o - w - _,
                                        c = 3 * (g - l),
                                        C = 3 * (d - g) - c,
                                        S = x - l - c - C,
                                        F, b; if(u === 0) F = s === 0 ? o : s === 1 ? p : ((A * s + _) * s + w) * s + o, b = s === 0 ? l : s === 1 ? x : ((S * s + C) * s + c) * s + l;
                                    else { var B = 1e-8,
                                            I = 1 - B; if(s < B ? (F = w, b = c) : s > I ? (F = 3 * (p - v), b = 3 * (x - d)) : (F = (3 * A * s + 2 * _) * s + w, b = (3 * S * s + 2 * C) * s + c), h) { F === 0 && b === 0 && (s < B || s > I) && (F = v - f, b = d - g); var D = Math.sqrt(F * F + b * b);
                                            D && (F /= D, b /= D) } if(u === 3) { var v = 6 * A * s + 2 * _,
                                                d = 6 * S * s + 2 * C,
                                                N = Math.pow(F * F + b * b, 3 / 2);
                                            F = N !== 0 ? (F * d - b * v) / N : 0, b = 0 } } return u === 2 ? new q(b, -F) : new q(F, b) } return { statics: { classify: function(n) { var s = n[0],
                                                u = n[1],
                                                h = n[2],
                                                o = n[3],
                                                l = n[4],
                                                f = n[5],
                                                g = n[6],
                                                v = n[7],
                                                d = s * (v - f) + u * (l - g) + g * f - v * l,
                                                p = h * (u - v) + o * (g - s) + s * v - u * g,
                                                x = l * (o - u) + f * (s - h) + h * u - o * s,
                                                y = 3 * x,
                                                w = y - p,
                                                _ = w - p + d,
                                                A = Math.sqrt(_ * _ + w * w + y * y),
                                                c = A !== 0 ? 1 / A : 0,
                                                C = Ft.isZero,
                                                S = "serpentine";
                                            _ *= c, w *= c, y *= c;

                                            function F(D, N, L) { var V = N !== tt,
                                                    O = V && N > 0 && N < 1,
                                                    R = V && L > 0 && L < 1; return V && (!(O || R) || D === "loop" && !(O && R)) && (D = "arch", O = R = !1), { type: D, roots: O || R ? O && R ? N < L ? [N, L] : [L, N] : [O ? N : L] : null } } if(C(_)) return C(w) ? F(C(y) ? "line" : "quadratic") : F(S, y / (3 * w)); var b = 3 * w * w - 4 * _ * y; if(C(b)) return F("cusp", w / (2 * _)); var B = b > 0 ? Math.sqrt(b / 3) : Math.sqrt(-b),
                                                I = 2 * _; return F(b > 0 ? S : "loop", (w + B) / I, (w - B) / I) }, getLength: function(n, s, u, h) { if(s === tt && (s = 0), u === tt && (u = 1), it.isStraight(n)) { var o = n;
                                                u < 1 && (o = it.subdivide(o, u)[0], s /= u), s > 0 && (o = it.subdivide(o, s)[1]); var l = o[6] - o[0],
                                                    f = o[7] - o[1]; return Math.sqrt(l * l + f * f) } return Ft.integrate(h || t(n), s, u, e(s, u)) }, getTimeAt: function(n, s, u) { if(u === tt && (u = s < 0 ? 1 : 0), s === 0) return u; var h = Math.abs,
                                                o = 1e-12,
                                                l = s > 0,
                                                f = l ? u : 0,
                                                g = l ? 1 : u,
                                                v = t(n),
                                                d = it.getLength(n, f, g, v),
                                                p = h(s) - d; if(h(p) < o) return l ? g : f; if(p > o) return null; var x = s / d,
                                                y = 0;

                                            function w(_) { return y += Ft.integrate(v, u, _, e(u, _)), u = _, y - s } return Ft.findRoot(w, v, u + x, f, g, 32, 1e-12) }, getPoint: function(n, s) { return r(n, s, 0, !1) }, getTangent: function(n, s) { return r(n, s, 1, !0) }, getWeightedTangent: function(n, s) { return r(n, s, 1, !1) }, getNormal: function(n, s) { return r(n, s, 2, !0) }, getWeightedNormal: function(n, s) { return r(n, s, 2, !1) }, getCurvature: function(n, s) { return r(n, s, 3, !1)
                                                .x }, getPeaks: function(n) { var s = n[0],
                                                u = n[1],
                                                h = n[2],
                                                o = n[3],
                                                l = n[4],
                                                f = n[5],
                                                g = n[6],
                                                v = n[7],
                                                d = -s + 3 * h - 3 * l + g,
                                                p = 3 * s - 6 * h + 3 * l,
                                                x = -3 * s + 3 * h,
                                                y = -u + 3 * o - 3 * f + v,
                                                w = 3 * u - 6 * o + 3 * f,
                                                _ = -3 * u + 3 * o,
                                                A = 1e-8,
                                                c = 1 - A,
                                                C = []; return Ft.solveCubic(9 * (d * d + y * y), 9 * (d * p + w * y), 2 * (p * p + w * w) + 3 * (x * d + _ * y), x * p + w * _, C, A, c), C.sort() } } } }, new function() {
                                function t(p, x, y, w, _, A, c) { var C = !c && y.getPrevious() === _,
                                        S = !c && y !== _ && y.getNext() === _,
                                        F = 1e-8,
                                        b = 1 - F; if(w !== null && w >= (C ? F : 0) && w <= (S ? b : 1) && A !== null && A >= (S ? F : 0) && A <= (C ? b : 1)) { var B = new $t(y, w, null, c),
                                            I = new $t(_, A, null, c);
                                        B._intersection = I, I._intersection = B, (!x || x(B)) && $t.insert(p, B, !0) } }

                                function e(p, x, y, w, _, A, c, C, S, F, b, B, I) { if(++S >= 4096 || ++C >= 40) return S; var D = 1e-9,
                                        N = x[0],
                                        L = x[1],
                                        V = x[6],
                                        O = x[7],
                                        R = k.getSignedDistance,
                                        U = R(N, L, V, O, x[2], x[3]),
                                        j = R(N, L, V, O, x[4], x[5]),
                                        K = U * j > 0 ? 3 / 4 : 4 / 9,
                                        J = K * Math.min(0, U, j),
                                        rt = K * Math.max(0, U, j),
                                        st = R(N, L, V, O, p[0], p[1]),
                                        Z = R(N, L, V, O, p[2], p[3]),
                                        Q = R(N, L, V, O, p[4], p[5]),
                                        $ = R(N, L, V, O, p[6], p[7]),
                                        ut = r(st, Z, Q, $),
                                        at = ut[0],
                                        pt = ut[1],
                                        ft, _t; if(U === 0 && j === 0 && st === 0 && Z === 0 && Q === 0 && $ === 0 || (ft = n(at, pt, J, rt)) == null || (_t = n(at.reverse(), pt.reverse(), J, rt)) == null) return S; var wt = F + (b - F) * ft,
                                        Y = F + (b - F) * _t; if(Math.max(I - B, Y - wt) < D) { var Tt = (wt + Y) / 2,
                                            Xt = (B + I) / 2;
                                        t(_, A, c ? w : y, c ? Xt : Tt, c ? y : w, c ? Tt : Xt) } else { p = it.getPart(p, ft, _t); var te = I - B; if(_t - ft > .8)
                                            if(Y - wt > te) { var jt = it.subdivide(p, .5),
                                                    Tt = (wt + Y) / 2;
                                                S = e(x, jt[0], w, y, _, A, !c, C, S, B, I, wt, Tt), S = e(x, jt[1], w, y, _, A, !c, C, S, B, I, Tt, Y) } else { var jt = it.subdivide(x, .5),
                                                    Xt = (B + I) / 2;
                                                S = e(jt[0], p, w, y, _, A, !c, C, S, B, Xt, wt, Y), S = e(jt[1], p, w, y, _, A, !c, C, S, Xt, I, wt, Y) } else te === 0 || te >= D ? S = e(x, p, w, y, _, A, !c, C, S, B, I, wt, Y) : S = e(p, x, y, w, _, A, c, C, S, wt, Y, B, I) } return S }

                                function r(p, x, y, w) { var _ = [0, p],
                                        A = [1 / 3, x],
                                        c = [2 / 3, y],
                                        C = [1, w],
                                        S = x - (2 * p + w) / 3,
                                        F = y - (p + 2 * w) / 3,
                                        b; if(S * F < 0) b = [
                                        [_, A, C],
                                        [_, c, C]
                                    ];
                                    else { var B = S / F;
                                        b = [B >= 2 ? [_, A, C] : B <= .5 ? [_, c, C] : [_, A, c, C],
                                            [_, C]
                                        ] } return (S || F) < 0 ? b.reverse() : b }

                                function n(p, x, y, w) { return p[0][1] < y ? s(p, !0, y) : x[0][1] > w ? s(x, !1, w) : p[0][0] }

                                function s(p, x, y) { for(var w = p[0][0], _ = p[0][1], A = 1, c = p.length; A < c; A++) { var C = p[A][0],
                                            S = p[A][1]; if(x ? S >= y : S <= y) return S === y ? C : w + (y - _) * (C - w) / (S - _);
                                        w = C, _ = S } return null }

                                function u(p, x, y, w, _) { var A = Ft.isZero; if(A(w) && A(_)) { var c = it.getTimeOf(p, new q(x, y)); return c === null ? [] : [c] } for(var C = Math.atan2(-_, w), S = Math.sin(C), F = Math.cos(C), b = [], B = [], I = 0; I < 8; I += 2) { var D = p[I] - x,
                                            N = p[I + 1] - y;
                                        b.push(D * F - N * S, D * S + N * F) } return it.solveCubic(b, 1, 0, B, 0, 1), B }

                                function h(p, x, y, w, _, A, c) { for(var C = x[0], S = x[1], F = x[6], b = x[7], B = u(p, C, S, F - C, b - S), I = 0, D = B.length; I < D; I++) { var N = B[I],
                                            L = it.getPoint(p, N),
                                            V = it.getTimeOf(x, L);
                                        V !== null && t(_, A, c ? w : y, c ? V : N, c ? y : w, c ? N : V) } }

                                function o(p, x, y, w, _, A) { var c = k.intersect(p[0], p[1], p[6], p[7], x[0], x[1], x[6], x[7]);
                                    c && t(_, A, y, it.getTimeOf(p, c), w, it.getTimeOf(x, c)) }

                                function l(p, x, y, w, _, A) { var c = 1e-12,
                                        C = Math.min,
                                        S = Math.max; if(S(p[0], p[2], p[4], p[6]) + c > C(x[0], x[2], x[4], x[6]) && C(p[0], p[2], p[4], p[6]) - c < S(x[0], x[2], x[4], x[6]) && S(p[1], p[3], p[5], p[7]) + c > C(x[1], x[3], x[5], x[7]) && C(p[1], p[3], p[5], p[7]) - c < S(x[1], x[3], x[5], x[7])) { var F = v(p, x); if(F)
                                            for(var b = 0; b < 2; b++) { var B = F[b];
                                                t(_, A, y, B[0], w, B[1], !0) } else { var I = it.isStraight(p),
                                                    D = it.isStraight(x),
                                                    N = I && D,
                                                    L = I && !D,
                                                    V = _.length; if((N ? o : I || D ? h : e)(L ? x : p, L ? p : x, L ? w : y, L ? y : w, _, A, L, 0, 0, 0, 1, 0, 1), !N || _.length === V)
                                                    for(var b = 0; b < 4; b++) { var O = b >> 1,
                                                            R = b & 1,
                                                            U = O * 6,
                                                            j = R * 6,
                                                            K = new q(p[U], p[U + 1]),
                                                            J = new q(x[j], x[j + 1]);
                                                        K.isClose(J, c) && t(_, A, y, O, w, R) } } } return _ }

                                function f(p, x, y, w) { var _ = it.classify(p); if(_.type === "loop") { var A = _.roots;
                                        t(y, w, x, A[0], x, A[1]) } return y }

                                function g(p, x, y, w, _, A) { var c = 1e-7,
                                        C = !x;
                                    C && (x = p); for(var S = p.length, F = x.length, b = new Array(S), B = C ? b : new Array(F), I = [], D = 0; D < S; D++) b[D] = p[D].getValues(w); if(!C)
                                        for(var D = 0; D < F; D++) B[D] = x[D].getValues(_); for(var N = ri.findCurveBoundsCollisions(b, B, c), L = 0; L < S; L++) { var V = p[L],
                                            O = b[L];
                                        C && f(O, V, I, y); var R = N[L]; if(R)
                                            for(var U = 0; U < R.length; U++) { if(A && I.length) return I; var j = R[U]; if(!C || j > L) { var K = x[j],
                                                        J = B[j];
                                                    l(O, J, V, K, I, y) } } } return I }

                                function v(p, x) {
                                    function y($) { var ut = $[6] - $[0],
                                            at = $[7] - $[1]; return ut * ut + at * at } var w = Math.abs,
                                        _ = k.getDistance,
                                        A = 1e-8,
                                        c = 1e-7,
                                        C = it.isStraight(p),
                                        S = it.isStraight(x),
                                        F = C && S,
                                        b = y(p) < y(x),
                                        B = b ? x : p,
                                        I = b ? p : x,
                                        D = B[0],
                                        N = B[1],
                                        L = B[6] - D,
                                        V = B[7] - N; if(_(D, N, L, V, I[0], I[1], !0) < c && _(D, N, L, V, I[6], I[7], !0) < c) !F && _(D, N, L, V, B[2], B[3], !0) < c && _(D, N, L, V, B[4], B[5], !0) < c && _(D, N, L, V, I[2], I[3], !0) < c && _(D, N, L, V, I[4], I[5], !0) < c && (C = S = F = !0);
                                    else if(F) return null; if(C ^ S) return null; for(var O = [p, x], R = [], U = 0; U < 4 && R.length < 2; U++) { var j = U & 1,
                                            K = j ^ 1,
                                            J = U >> 1,
                                            rt = it.getTimeOf(O[j], new q(O[K][J ? 6 : 0], O[K][J ? 7 : 1])); if(rt != null) { var st = j ? [J, rt] : [rt, J];
                                            (!R.length || w(st[0] - R[0][0]) > A && w(st[1] - R[0][1]) > A) && R.push(st) } if(U > 2 && !R.length) break } if(R.length !== 2) R = null;
                                    else if(!F) { var Z = it.getPart(p, R[0][0], R[1][0]),
                                            Q = it.getPart(x, R[0][1], R[1][1]);
                                        (w(Q[2] - Z[2]) > c || w(Q[3] - Z[3]) > c || w(Q[4] - Z[4]) > c || w(Q[5] - Z[5]) > c) && (R = null) } return R }

                                function d(p, x) { var y = p[0],
                                        w = p[1],
                                        _ = p[2],
                                        A = p[3],
                                        c = p[4],
                                        C = p[5],
                                        S = p[6],
                                        F = p[7],
                                        b = x.normalize(),
                                        B = b.x,
                                        I = b.y,
                                        D = 3 * S - 9 * c + 9 * _ - 3 * y,
                                        N = 3 * F - 9 * C + 9 * A - 3 * w,
                                        L = 6 * c - 12 * _ + 6 * y,
                                        V = 6 * C - 12 * A + 6 * w,
                                        O = 3 * _ - 3 * y,
                                        R = 3 * A - 3 * w,
                                        U = 2 * D * I - 2 * N * B,
                                        j = []; if(Math.abs(U) < Ft.CURVETIME_EPSILON) { var K = D * R - N * O,
                                            U = D * V - N * L; if(U != 0) { var J = -K / U;
                                            J >= 0 && J <= 1 && j.push(J) } } else { var rt = (L * L - 4 * D * O) * I * I + (-2 * L * V + 4 * N * O + 4 * D * R) * B * I + (V * V - 4 * N * R) * B * B,
                                            st = L * I - V * B; if(rt >= 0 && U != 0) { var Z = Math.sqrt(rt),
                                                Q = -(st + Z) / U,
                                                $ = (-st + Z) / U;
                                            Q >= 0 && Q <= 1 && j.push(Q), $ >= 0 && $ <= 1 && j.push($) } } return j } return { getIntersections: function(p) { var x = this.getValues(),
                                            y = p && p !== this && p.getValues(); return y ? l(x, y, this, p, []) : f(x, this, []) }, statics: { getOverlaps: v, getIntersections: g, getCurveLineIntersections: u, getTimesWithTangent: d } } }),
                            $t = M.extend({ _class: "CurveLocation", initialize: function(e, r, n, s, u) { if(r >= .99999999) { var h = e.getNext();
                                        h && (r = 0, e = h) } this._setCurve(e), this._time = r, this._point = n || e.getPointAtTime(r), this._overlap = s, this._distance = u, this._intersection = this._next = this._previous = null }, _setPath: function(t) { this._path = t, this._version = t ? t._version : 0 }, _setCurve: function(t) { this._setPath(t._path), this._curve = t, this._segment = null, this._segment1 = t._segment1, this._segment2 = t._segment2 }, _setSegment: function(t) { var e = t.getCurve();
                                    e ? this._setCurve(e) : (this._setPath(t._path), this._segment1 = t, this._segment2 = null), this._segment = t, this._time = t === this._segment1 ? 0 : 1, this._point = t._point.clone() }, getSegment: function() { var t = this._segment; if(!t) { var e = this.getCurve(),
                                            r = this.getTime();
                                        r === 0 ? t = e._segment1 : r === 1 ? t = e._segment2 : r != null && (t = e.getPartLength(0, r) < e.getPartLength(r, 1) ? e._segment1 : e._segment2), this._segment = t } return t }, getCurve: function() { var t = this._path,
                                        e = this;
                                    t && t._version !== this._version && (this._time = this._offset = this._curveOffset = this._curve = null);

                                    function r(n) { var s = n && n.getCurve(); if(s && (e._time = s.getTimeOf(e._point)) != null) return e._setCurve(s), s } return this._curve || r(this._segment) || r(this._segment1) || r(this._segment2.getPrevious()) }, getPath: function() { var t = this.getCurve(); return t && t._path }, getIndex: function() { var t = this.getCurve(); return t && t.getIndex() }, getTime: function() { var t = this.getCurve(),
                                        e = this._time; return t && e == null ? this._time = t.getTimeOf(this._point) : e }, getParameter: "#getTime", getPoint: function() { return this._point }, getOffset: function() { var t = this._offset; if(t == null) { t = 0; var e = this.getPath(),
                                            r = this.getIndex(); if(e && r != null)
                                            for(var n = e.getCurves(), s = 0; s < r; s++) t += n[s].getLength();
                                        this._offset = t += this.getCurveOffset() } return t }, getCurveOffset: function() { var t = this._curveOffset; if(t == null) { var e = this.getCurve(),
                                            r = this.getTime();
                                        this._curveOffset = t = r != null && e && e.getPartLength(0, r) } return t }, getIntersection: function() { return this._intersection }, getDistance: function() { return this._distance }, divide: function() { var t = this.getCurve(),
                                        e = t && t.divideAtTime(this.getTime()); return e && this._setSegment(e._segment1), e }, split: function() { var t = this.getCurve(),
                                        e = t._path,
                                        r = t && t.splitAtTime(this.getTime()); return r && this._setSegment(e.getLastSegment()), r }, equals: function(t, e) { var r = this === t; if(!r && t instanceof $t) { var n = this.getCurve(),
                                            s = t.getCurve(),
                                            u = n._path,
                                            h = s._path; if(u === h) { var o = Math.abs,
                                                l = 1e-7,
                                                f = o(this.getOffset() - t.getOffset()),
                                                g = !e && this._intersection,
                                                v = !e && t._intersection;
                                            r = (f < l || u && o(u.getLength() - f) < l) && (!g && !v || g && v && g.equals(v, !0)) } } return r }, toString: function() { var t = [],
                                        e = this.getPoint(),
                                        r = me.instance;
                                    e && t.push("point: " + e); var n = this.getIndex();
                                    n != null && t.push("index: " + n); var s = this.getTime(); return s != null && t.push("time: " + r.number(s)), this._distance != null && t.push("distance: " + r.number(this._distance)), "{ " + t.join(", ") + " }" }, isTouching: function() { var t = this._intersection; if(t && this.getTangent()
                                        .isCollinear(t.getTangent())) { var e = this.getCurve(),
                                            r = t.getCurve(); return !(e.isStraight() && r.isStraight() && e.getLine()
                                            .intersect(r.getLine())) } return !1 }, isCrossing: function() { var t = this._intersection; if(!t) return !1; var e = this.getTime(),
                                        r = t.getTime(),
                                        n = 1e-8,
                                        s = 1 - n,
                                        u = e >= n && e <= s,
                                        h = r >= n && r <= s; if(u && h) return !this.isTouching(); var o = this.getCurve(),
                                        l = o && e < n ? o.getPrevious() : o,
                                        f = t.getCurve(),
                                        g = f && r < n ? f.getPrevious() : f; if(e > s && (o = o.getNext()), r > s && (f = f.getNext()), !l || !o || !g || !f) return !1; var v = [];

                                    function d(B, I) { var D = B.getValues(),
                                            N = it.classify(D)
                                            .roots || it.getPeaks(D),
                                            L = N.length,
                                            V = it.getLength(D, I && L ? N[L - 1] : 0, !I && L ? N[0] : 1);
                                        v.push(L ? V : V / 32) }

                                    function p(B, I, D) { return I < D ? B > I && B < D : B > I || B < D } u || (d(l, !0), d(o, !1)), h || (d(g, !0), d(f, !1)); var x = this.getPoint(),
                                        y = Math.min.apply(Math, v),
                                        w = u ? o.getTangentAtTime(e) : o.getPointAt(y)
                                        .subtract(x),
                                        _ = u ? w.negate() : l.getPointAt(-y)
                                        .subtract(x),
                                        A = h ? f.getTangentAtTime(r) : f.getPointAt(y)
                                        .subtract(x),
                                        c = h ? A.negate() : g.getPointAt(-y)
                                        .subtract(x),
                                        C = _.getAngle(),
                                        S = w.getAngle(),
                                        F = c.getAngle(),
                                        b = A.getAngle(); return !!(u ? p(C, F, b) ^ p(S, F, b) && p(C, b, F) ^ p(S, b, F) : p(F, C, S) ^ p(b, C, S) && p(F, S, C) ^ p(b, S, C)) }, hasOverlap: function() { return !!this._overlap } }, M.each(it._evaluateMethods, function(t) { var e = t + "At";
                                this[t] = function() { var r = this.getCurve(),
                                        n = this.getTime(); return n != null && r && r[e](n, !0) } }, { preserve: !0 }), new function() {
                                function t(e, r, n) { var s = e.length,
                                        u = 0,
                                        h = s - 1;

                                    function o(x, y) { for(var w = x + y; w >= -1 && w <= s; w += y) { var _ = e[(w % s + s) % s]; if(!r.getPoint()
                                                .isClose(_.getPoint(), 1e-7)) break; if(r.equals(_)) return _ } return null } for(; u <= h;) { var l = u + h >>> 1,
                                            f = e[l],
                                            g; if(n && (g = r.equals(f) ? f : o(l, -1) || o(l, 1))) return r._overlap && (g._overlap = g._intersection._overlap = !0), g; var v = r.getPath(),
                                            d = f.getPath(),
                                            p = v !== d ? v._id - d._id : r.getIndex() + r.getTime() - (f.getIndex() + f.getTime());
                                        p < 0 ? h = l - 1 : u = l + 1 } return e.splice(u, 0, r), r } return { statics: { insert: t, expand: function(e) { for(var r = e.slice(), n = e.length - 1; n >= 0; n--) t(r, e[n]._intersection, !1); return r } } } }),
                            ge = Ct.extend({ _class: "PathItem", _selectBounds: !1, _canScaleStroke: !0, beans: !0, initialize: function() {}, statics: { create: function(t) { var e, r, n; if(M.isPlainObject(t) ? (r = t.segments, e = t.pathData) : Array.isArray(t) ? r = t : typeof t == "string" && (e = t), r) { var s = r[0];
                                            n = s && Array.isArray(s[0]) } else e && (n = (e.match(/m/gi) || [])
                                            .length > 1 || /z\s*\S+/i.test(e)); var u = n ? oe : Bt; return new u(t) } }, _asPathItem: function() { return this }, isClockwise: function() { return this.getArea() >= 0 }, setClockwise: function(t) { this.isClockwise() != (t = !!t) && this.reverse() }, setPathData: function(t) { var e = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/ig),
                                        r, n = !1,
                                        s, u, h = new q,
                                        o = new q;

                                    function l(c, C) { var S = +r[c]; return n && (S += h[C]), S }

                                    function f(c) { return new q(l(c, "x"), l(c + 1, "y")) } this.clear(); for(var g = 0, v = e && e.length; g < v; g++) { var d = e[g],
                                            p = d[0],
                                            x = p.toLowerCase();
                                        r = d.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g); var y = r && r.length; switch (n = p === x, s === "z" && !/[mz]/.test(x) && this.moveTo(h), x) {
                                            case "m":
                                            case "l":
                                                for(var w = x === "m", _ = 0; _ < y; _ += 2) this[w ? "moveTo" : "lineTo"](h = f(_)), w && (o = h, w = !1);
                                                u = h; break;
                                            case "h":
                                            case "v":
                                                var A = x === "h" ? "x" : "y";
                                                h = h.clone(); for(var _ = 0; _ < y; _++) h[A] = l(_, A), this.lineTo(h);
                                                u = h; break;
                                            case "c":
                                                for(var _ = 0; _ < y; _ += 6) this.cubicCurveTo(f(_), u = f(_ + 2), h = f(_ + 4)); break;
                                            case "s":
                                                for(var _ = 0; _ < y; _ += 4) this.cubicCurveTo(/[cs]/.test(s) ? h.multiply(2)
                                                    .subtract(u) : h, u = f(_), h = f(_ + 2)), s = x; break;
                                            case "q":
                                                for(var _ = 0; _ < y; _ += 4) this.quadraticCurveTo(u = f(_), h = f(_ + 2)); break;
                                            case "t":
                                                for(var _ = 0; _ < y; _ += 2) this.quadraticCurveTo(u = /[qt]/.test(s) ? h.multiply(2)
                                                    .subtract(u) : h, h = f(_)), s = x; break;
                                            case "a":
                                                for(var _ = 0; _ < y; _ += 7) this.arcTo(h = f(_ + 5), new ot(+r[_], +r[_ + 1]), +r[_ + 2], +r[_ + 4], +r[_ + 3]); break;
                                            case "z":
                                                this.closePath(1e-12), h = o; break } s = x } }, _canComposite: function() { return !(this.hasFill() && this.hasStroke()) }, _contains: function(t) { var e = t.isInside(this.getBounds({ internal: !0, handle: !0 })) ? this._getWinding(t) : {}; return e.onPath || !!(this.getFillRule() === "evenodd" ? e.windingL & 1 || e.windingR & 1 : e.winding) }, getIntersections: function(t, e, r, n) { var s = this === t || !t,
                                        u = this._matrix._orNullIfIdentity(),
                                        h = s ? u : (r || t._matrix)
                                        ._orNullIfIdentity(); return s || this.getBounds(u)
                                        .intersects(t.getBounds(h), 1e-12) ? it.getIntersections(this.getCurves(), !s && t.getCurves(), e, u, h, n) : [] }, getCrossings: function(t) { return this.getIntersections(t, function(e) { return e.isCrossing() }) }, getNearestLocation: function() { for(var t = q.read(arguments), e = this.getCurves(), r = 1 / 0, n = null, s = 0, u = e.length; s < u; s++) { var h = e[s].getNearestLocation(t);
                                        h._distance < r && (r = h._distance, n = h) } return n }, getNearestPoint: function() { var t = this.getNearestLocation.apply(this, arguments); return t && t.getPoint() }, interpolate: function(t, e, r) { var n = !this._children,
                                        s = n ? "_segments" : "_children",
                                        u = t[s],
                                        h = e[s],
                                        o = this[s]; if(!u || !h || u.length !== h.length) throw new Error("Invalid operands in interpolate() call: " + t + ", " + e); var l = o.length,
                                        f = h.length; if(l < f)
                                        for(var g = n ? ct : Bt, v = l; v < f; v++) this.add(new g);
                                    else l > f && this[n ? "removeSegments" : "removeChildren"](f, l); for(var v = 0; v < f; v++) o[v].interpolate(u[v], h[v], r);
                                    n && (this.setClosed(t._closed), this._changed(9)) }, compare: function(t) { var e = !1; if(t) { var r = this._children || [this],
                                            n = t._children ? t._children.slice() : [t],
                                            s = r.length,
                                            u = n.length,
                                            h = [],
                                            o = 0;
                                        e = !0; for(var l = ri.findItemBoundsCollisions(r, n, Ft.GEOMETRIC_EPSILON), f = s - 1; f >= 0 && e; f--) { var g = r[f];
                                            e = !1; var v = l[f]; if(v)
                                                for(var d = v.length - 1; d >= 0 && !e; d--) g.compare(n[v[d]]) && (h[v[d]] || (h[v[d]] = !0, o++), e = !0) } e = e && o === u } return e } }),
                            Bt = ge.extend({ _class: "Path", _serializeFields: { segments: [], closed: !1 }, initialize: function(e) { this._closed = !1, this._segments = [], this._version = 0; var r = arguments,
                                        n = Array.isArray(e) ? typeof e[0] == "object" ? e : r : e && e.size === tt && (e.x !== tt || e.point !== tt) ? r : null;
                                    n && n.length > 0 ? this.setSegments(n) : (this._curves = tt, this._segmentSelection = 0, !n && typeof e == "string" && (this.setPathData(e), e = null)), this._initialize(!n && e) }, _equals: function(t) { return this._closed === t._closed && M.equals(this._segments, t._segments) }, copyContent: function(t) { this.setSegments(t._segments), this._closed = t._closed }, _changed: function t(e) { if(t.base.call(this, e), e & 8) { if(this._length = this._area = tt, e & 32) this._version++;
                                        else if(this._curves)
                                            for(var r = 0, n = this._curves.length; r < n; r++) this._curves[r]._changed() } else e & 64 && (this._bounds = tt) }, getStyle: function() { var t = this._parent; return (t instanceof oe ? t : this)
                                        ._style }, getSegments: function() { return this._segments }, setSegments: function(t) { var e = this.isFullySelected(),
                                        r = t && t.length; if(this._segments.length = 0, this._segmentSelection = 0, this._curves = tt, r) { var n = t[r - 1];
                                        typeof n == "boolean" && (this.setClosed(n), r--), this._add(ct.readList(t, 0, {}, r)) } e && this.setFullySelected(!0) }, getFirstSegment: function() { return this._segments[0] }, getLastSegment: function() { return this._segments[this._segments.length - 1] }, getCurves: function() { var t = this._curves,
                                        e = this._segments; if(!t) { var r = this._countCurves();
                                        t = this._curves = new Array(r); for(var n = 0; n < r; n++) t[n] = new it(this, e[n], e[n + 1] || e[0]) } return t }, getFirstCurve: function() { return this.getCurves()[0] }, getLastCurve: function() { var t = this.getCurves(); return t[t.length - 1] }, isClosed: function() { return this._closed }, setClosed: function(t) { if(this._closed != (t = !!t)) { if(this._closed = t, this._curves) { var e = this._curves.length = this._countCurves();
                                            t && (this._curves[e - 1] = new it(this, this._segments[e - 1], this._segments[0])) } this._changed(41) } } }, { beans: !0, getPathData: function(t, e) { var r = this._segments,
                                        n = r.length,
                                        s = new me(e),
                                        u = new Array(6),
                                        h = !0,
                                        o, l, f, g, v, d, p, x, y = [];

                                    function w(A, c) { if(A._transformCoordinates(t, u), o = u[0], l = u[1], h) y.push("M" + s.pair(o, l)), h = !1;
                                        else if(v = u[2], d = u[3], v === o && d === l && p === f && x === g) { if(!c) { var C = o - f,
                                                    S = l - g;
                                                y.push(C === 0 ? "v" + s.number(S) : S === 0 ? "h" + s.number(C) : "l" + s.pair(C, S)) } } else y.push("c" + s.pair(p - f, x - g) + " " + s.pair(v - f, d - g) + " " + s.pair(o - f, l - g));
                                        f = o, g = l, p = u[4], x = u[5] } if(!n) return ""; for(var _ = 0; _ < n; _++) w(r[_]); return this._closed && n > 0 && (w(r[0], !0), y.push("z")), y.join("") }, isEmpty: function() { return !this._segments.length }, _transformContent: function(t) { for(var e = this._segments, r = new Array(6), n = 0, s = e.length; n < s; n++) e[n]._transformCoordinates(t, r, !0); return !0 }, _add: function(t, h) { for(var r = this._segments, n = this._curves, s = t.length, u = h == null, h = u ? r.length : h, o = 0; o < s; o++) { var l = t[o];
                                        l._path && (l = t[o] = l.clone()), l._path = this, l._index = h + o, l._selection && this._updateSelection(l, 0, l._selection) } if(u) M.push(r, t);
                                    else { r.splice.apply(r, [h, 0].concat(t)); for(var o = h + s, f = r.length; o < f; o++) r[o]._index = o } if(n) { var g = this._countCurves(),
                                            v = h > 0 && h + s - 1 === g ? h - 1 : h,
                                            d = v,
                                            p = Math.min(v + s, g);
                                        t._curves && (n.splice.apply(n, [v, 0].concat(t._curves)), d += t._curves.length); for(var o = d; o < p; o++) n.splice(o, 0, new it(this, null, null));
                                        this._adjustCurves(v, p) } return this._changed(41), t }, _adjustCurves: function(t, e) { for(var r = this._segments, n = this._curves, s, u = t; u < e; u++) s = n[u], s._path = this, s._segment1 = r[u], s._segment2 = r[u + 1] || r[0], s._changed();
                                    (s = n[this._closed && !t ? r.length - 1 : t - 1]) && (s._segment2 = r[t] || r[0], s._changed()), (s = n[e]) && (s._segment1 = r[e], s._changed()) }, _countCurves: function() { var t = this._segments.length; return !this._closed && t > 0 ? t - 1 : t }, add: function(t) { var e = arguments; return e.length > 1 && typeof t != "number" ? this._add(ct.readList(e)) : this._add([ct.read(e)])[0] }, insert: function(t, e) { var r = arguments; return r.length > 2 && typeof e != "number" ? this._add(ct.readList(r, 1), t) : this._add([ct.read(r, 1)], t)[0] }, addSegment: function() { return this._add([ct.read(arguments)])[0] }, insertSegment: function(t) { return this._add([ct.read(arguments, 1)], t)[0] }, addSegments: function(t) { return this._add(ct.readList(t)) }, insertSegments: function(t, e) { return this._add(ct.readList(e), t) }, removeSegment: function(t) { return this.removeSegments(t, t + 1)[0] || null }, removeSegments: function(t, e, r) { t = t || 0, e = M.pick(e, this._segments.length); var n = this._segments,
                                        s = this._curves,
                                        u = n.length,
                                        h = n.splice(t, e - t),
                                        o = h.length; if(!o) return h; for(var l = 0; l < o; l++) { var f = h[l];
                                        f._selection && this._updateSelection(f, f._selection, 0), f._index = f._path = null } for(var l = t, g = n.length; l < g; l++) n[l]._index = l; if(s) { for(var v = t > 0 && e === u + (this._closed ? 1 : 0) ? t - 1 : t, s = s.splice(v, o), l = s.length - 1; l >= 0; l--) s[l]._path = null;
                                        r && (h._curves = s.slice(1)), this._adjustCurves(v, v) } return this._changed(41), h }, clear: "#removeSegments", hasHandles: function() { for(var t = this._segments, e = 0, r = t.length; e < r; e++)
                                        if(t[e].hasHandles()) return !0; return !1 }, clearHandles: function() { for(var t = this._segments, e = 0, r = t.length; e < r; e++) t[e].clearHandles() }, getLength: function() { if(this._length == null) { for(var t = this.getCurves(), e = 0, r = 0, n = t.length; r < n; r++) e += t[r].getLength();
                                        this._length = e } return this._length }, getArea: function() { var t = this._area; if(t == null) { var e = this._segments,
                                            r = this._closed;
                                        t = 0; for(var n = 0, s = e.length; n < s; n++) { var u = n + 1 === s;
                                            t += it.getArea(it.getValues(e[n], e[u ? 0 : n + 1], null, u && !r)) } this._area = t } return t }, isFullySelected: function() { var t = this._segments.length; return this.isSelected() && t > 0 && this._segmentSelection === t * 7 }, setFullySelected: function(t) { t && this._selectSegments(!0), this.setSelected(t) }, setSelection: function t(e) { e & 1 || this._selectSegments(!1), t.base.call(this, e) }, _selectSegments: function(t) { var e = this._segments,
                                        r = e.length,
                                        n = t ? 7 : 0;
                                    this._segmentSelection = n * r; for(var s = 0; s < r; s++) e[s]._selection = n }, _updateSelection: function(t, e, r) { t._selection = r; var n = this._segmentSelection += r - e;
                                    n > 0 && this.setSelected(!0) }, divideAt: function(t) { var e = this.getLocationAt(t),
                                        r; return e && (r = e.getCurve()
                                        .divideAt(e.getCurveOffset())) ? r._segment1 : null }, splitAt: function(t) { var e = this.getLocationAt(t),
                                        r = e && e.index,
                                        n = e && e.time,
                                        s = 1e-8,
                                        u = 1 - s;
                                    n > u && (r++, n = 0); var h = this.getCurves(); if(r >= 0 && r < h.length) { n >= s && h[r++].divideAtTime(n); var o = this.removeSegments(r, this._segments.length, !0),
                                            l; return this._closed ? (this.setClosed(!1), l = this) : (l = new Bt(Ct.NO_INSERT), l.insertAbove(this), l.copyAttributes(this)), l._add(o, 0), this.addSegment(o[0]), l } return null }, split: function(t, e) { var r, n = e === tt ? t : (r = this.getCurves()[t]) && r.getLocationAtTime(e); return n != null ? this.splitAt(n) : null }, join: function(t, e) { var r = e || 0; if(t && t !== this) { var n = t._segments,
                                            s = this.getLastSegment(),
                                            u = t.getLastSegment(); if(!u) return this;
                                        s && s._point.isClose(u._point, r) && t.reverse(); var h = t.getFirstSegment(); if(s && s._point.isClose(h._point, r)) s.setHandleOut(h._handleOut), this._add(n.slice(1));
                                        else { var o = this.getFirstSegment();
                                            o && o._point.isClose(h._point, r) && t.reverse(), u = t.getLastSegment(), o && o._point.isClose(u._point, r) ? (o.setHandleIn(u._handleIn), this._add(n.slice(0, n.length - 1), 0)) : this._add(n.slice()) } t._closed && this._add([n[0]]), t.remove() } var l = this.getFirstSegment(),
                                        f = this.getLastSegment(); return l !== f && l._point.isClose(f._point, r) && (l.setHandleIn(f._handleIn), f.remove(), this.setClosed(!0)), this }, reduce: function(t) { for(var e = this.getCurves(), r = t && t.simplify, n = r ? 1e-7 : 0, s = e.length - 1; s >= 0; s--) { var u = e[s];!u.hasHandles() && (!u.hasLength(n) || r && u.isCollinear(u.getNext())) && u.remove() } return this }, reverse: function() { this._segments.reverse(); for(var t = 0, e = this._segments.length; t < e; t++) { var r = this._segments[t],
                                            n = r._handleIn;
                                        r._handleIn = r._handleOut, r._handleOut = n, r._index = t } this._curves = null, this._changed(9) }, flatten: function(t) { for(var e = new Ne(this, t || .25, 256, !0), r = e.parts, n = r.length, s = [], u = 0; u < n; u++) s.push(new ct(r[u].curve.slice(0, 2)));!this._closed && n > 0 && s.push(new ct(r[n - 1].curve.slice(6))), this.setSegments(s) }, simplify: function(t) { var e = new mi(this)
                                        .fit(t || 2.5); return e && this.setSegments(e), !!e }, smooth: function(t) { var e = this,
                                        r = t || {},
                                        n = r.type || "asymmetric",
                                        s = this._segments,
                                        u = s.length,
                                        h = this._closed;

                                    function o(at, pt) { var ft = at && at.index; if(ft != null) { var _t = at.path; if(_t && _t !== e) throw new Error(at._class + " " + ft + " of " + _t + " is not part of " + e);
                                            pt && at instanceof it && ft++ } else ft = typeof at == "number" ? at : pt; return Math.min(ft < 0 && h ? ft % u : ft < 0 ? ft + u : ft, u - 1) } var l = h && r.from === tt && r.to === tt,
                                        f = o(r.from, 0),
                                        g = o(r.to, u - 1); if(f > g)
                                        if(h) f -= u;
                                        else { var v = f;
                                            f = g, g = v } if(/^(?:asymmetric|continuous)$/.test(n)) { var d = n === "asymmetric",
                                            p = Math.min,
                                            x = g - f + 1,
                                            y = x - 1,
                                            w = l ? p(x, 4) : 1,
                                            _ = w,
                                            A = w,
                                            c = []; if(h || (_ = p(1, f), A = p(1, u - g - 1)), y += _ + A, y <= 1) return; for(var C = 0, S = f - _; C <= y; C++, S++) c[C] = s[(S < 0 ? S + u : S) % u]._point; for(var F = c[0]._x + 2 * c[1]._x, b = c[0]._y + 2 * c[1]._y, B = 2, I = y - 1, D = [F], N = [b], L = [B], V = [], O = [], C = 1; C < y; C++) { var R = C < I,
                                                U = R || d ? 1 : 2,
                                                j = R ? 4 : d ? 2 : 7,
                                                K = R ? 4 : d ? 3 : 8,
                                                J = R ? 2 : d ? 0 : 1,
                                                rt = U / B;
                                            B = L[C] = j - rt, F = D[C] = K * c[C]._x + J * c[C + 1]._x - rt * F, b = N[C] = K * c[C]._y + J * c[C + 1]._y - rt * b } V[I] = D[I] / L[I], O[I] = N[I] / L[I]; for(var C = y - 2; C >= 0; C--) V[C] = (D[C] - V[C + 1]) / L[C], O[C] = (N[C] - O[C + 1]) / L[C];
                                        V[y] = (3 * c[y]._x - V[I]) / 2, O[y] = (3 * c[y]._y - O[I]) / 2; for(var C = _, st = y - A, S = f; C <= st; C++, S++) { var Z = s[S < 0 ? S + u : S],
                                                Q = Z._point,
                                                $ = V[C] - Q._x,
                                                ut = O[C] - Q._y;
                                            (l || C < st) && Z.setHandleOut($, ut), (l || C > _) && Z.setHandleIn(-$, -ut) } } else
                                        for(var C = f; C <= g; C++) s[C < 0 ? C + u : C].smooth(r, !l && C === f, !l && C === g) }, toShape: function(t) { if(!this._closed) return null; var e = this._segments,
                                        r, n, s, u;

                                    function h(d, p) { var x = e[d],
                                            y = x.getNext(),
                                            w = e[p],
                                            _ = w.getNext(); return x._handleOut.isZero() && y._handleIn.isZero() && w._handleOut.isZero() && _._handleIn.isZero() && y._point.subtract(x._point)
                                            .isCollinear(_._point.subtract(w._point)) }

                                    function o(d) { var p = e[d],
                                            x = p.getPrevious(),
                                            y = p.getNext(); return x._handleOut.isZero() && p._handleIn.isZero() && p._handleOut.isZero() && y._handleIn.isZero() && p._point.subtract(x._point)
                                            .isOrthogonal(y._point.subtract(p._point)) }

                                    function l(d) { var p = e[d],
                                            x = p.getNext(),
                                            y = p._handleOut,
                                            w = x._handleIn,
                                            _ = .5522847498307936; if(y.isOrthogonal(w)) { var A = p._point,
                                                c = x._point,
                                                C = new k(A, y, !0)
                                                .intersect(new k(c, w, !0), !0); return C && Ft.isZero(y.getLength() / C.subtract(A)
                                                .getLength() - _) && Ft.isZero(w.getLength() / C.subtract(c)
                                                .getLength() - _) } return !1 }

                                    function f(d, p) { return e[d]._point.getDistance(e[p]._point) } if(!this.hasHandles() && e.length === 4 && h(0, 2) && h(1, 3) && o(1) ? (r = ue.Rectangle, n = new ot(f(0, 3), f(0, 1)), u = e[1]._point.add(e[2]._point)
                                            .divide(2)) : e.length === 8 && l(0) && l(2) && l(4) && l(6) && h(1, 5) && h(3, 7) ? (r = ue.Rectangle, n = new ot(f(1, 6), f(0, 3)), s = n.subtract(new ot(f(0, 7), f(1, 2)))
                                            .divide(2), u = e[3]._point.add(e[4]._point)
                                            .divide(2)) : e.length === 4 && l(0) && l(1) && l(2) && l(3) && (Ft.isZero(f(0, 2) - f(1, 3)) ? (r = ue.Circle, s = f(0, 2) / 2) : (r = ue.Ellipse, s = new ot(f(2, 0) / 2, f(3, 1) / 2)), u = e[1]._point), r) { var g = this.getPosition(!0),
                                            v = new r({ center: g, size: n, radius: s, insert: !1 }); return v.copyAttributes(this, !0), v._matrix.prepend(this._matrix), v.rotate(u.subtract(g)
                                            .getAngle() + 90), (t === tt || t) && v.insertAbove(this), v } return null }, toPath: "#clone", compare: function t(e) { if(!e || e instanceof oe) return t.base.call(this, e); var r = this.getCurves(),
                                        n = e.getCurves(),
                                        s = r.length,
                                        u = n.length; if(!s || !u) return s == u; for(var h = r[0].getValues(), o = [], l = 0, f, g = 0, v, d = 0; d < u; d++) { var w = n[d].getValues();
                                        o.push(w); var p = it.getOverlaps(h, w); if(p) { f = !d && p[0][0] > 0 ? u - 1 : d, v = p[0][1]; break } } for(var x = Math.abs, y = 1e-8, w = o[f], _; h && w;) { var p = it.getOverlaps(h, w); if(p) { var A = p[0][0]; if(x(A - g) < y) { g = p[1][0], g === 1 && (h = ++l < s ? r[l].getValues() : null, g = 0); var c = p[0][1]; if(x(c - v) < y) { if(_ || (_ = [f, c]), v = p[1][1], v === 1 && (++f >= u && (f = 0), w = o[f] || n[f].getValues(), v = 0), !h) return _[0] === f && _[1] === v; continue } } } break } return !1 }, _hitTestSelf: function(t, e, r, n) { var s = this,
                                        u = this.getStyle(),
                                        h = this._segments,
                                        o = h.length,
                                        l = this._closed,
                                        f = e._tolerancePadding,
                                        g = f,
                                        v, d, p, x, y, w, _ = e.stroke && u.hasStroke(),
                                        A = e.fill && u.hasFill(),
                                        c = e.curves,
                                        C = _ ? u.getStrokeWidth() / 2 : A && e.tolerance > 0 || c ? 0 : null;
                                    C !== null && (C > 0 ? (v = u.getStrokeJoin(), d = u.getStrokeCap(), p = u.getMiterLimit(), g = g.add(Bt._getStrokePadding(C, n))) : v = d = "round");

                                    function S(V, O) { return t.subtract(V)
                                            .divide(O)
                                            .length <= 1 }

                                    function F(V, O, R) { if(!e.selected || O.isSelected()) { var U = V._point; if(O !== U && (O = O.add(U)), S(O, g)) return new xe(R, s, { segment: V, point: O }) } }

                                    function b(V, O) { return (O || e.segments) && F(V, V._point, "segment") || !O && e.handles && (F(V, V._handleIn, "handle-in") || F(V, V._handleOut, "handle-out")) }

                                    function B(V) { x.add(V) }

                                    function I(V) { var O = l || V._index > 0 && V._index < o - 1; if((O ? v : d) === "round") return S(V._point, g); if(x = new Bt({ internal: !0, closed: !0 }), O ? V.isSmooth() || Bt._addBevelJoin(V, v, C, p, null, n, B, !0) : d === "square" && Bt._addSquareCap(V, d, C, null, n, B, !0), !x.isEmpty()) { var R; return x.contains(t) || (R = x.getNearestLocation(t)) && S(R.getPoint(), f) } } if(e.ends && !e.segments && !l) { if(w = b(h[0], !0) || b(h[o - 1], !0)) return w } else if(e.segments || e.handles) { for(var D = 0; D < o; D++)
                                            if(w = b(h[D])) return w } if(C !== null) { if(y = this.getNearestLocation(t), y) { var N = y.getTime();
                                            N === 0 || N === 1 && o > 1 ? I(y.getSegment()) || (y = null) : S(y.getPoint(), g) || (y = null) } if(!y && v === "miter" && o > 1)
                                            for(var D = 0; D < o; D++) { var L = h[D]; if(t.getDistance(L._point) <= p * C && I(L)) { y = L.getLocation(); break } } } return !y && A && this._contains(t) || y && !_ && !c ? new xe("fill", this) : y ? new xe(_ ? "stroke" : "curve", this, { location: y, point: y.getPoint() }) : null } }, M.each(it._evaluateMethods, function(t) { this[t + "At"] = function(e) { var r = this.getLocationAt(e); return r && r[t]() } }, { beans: !1, getLocationOf: function() { for(var t = q.read(arguments), e = this.getCurves(), r = 0, n = e.length; r < n; r++) { var s = e[r].getLocationOf(t); if(s) return s } return null }, getOffsetOf: function() { var t = this.getLocationOf.apply(this, arguments); return t ? t.getOffset() : null }, getLocationAt: function(t) { if(typeof t == "number") { for(var e = this.getCurves(), r = 0, n = 0, s = e.length; n < s; n++) { var u = r,
                                                h = e[n]; if(r += h.getLength(), r > t) return h.getLocationAt(t - u) } if(e.length > 0 && t <= this.getLength()) return new $t(e[e.length - 1], 1) } else if(t && t.getPath && t.getPath() === this) return t; return null }, getOffsetsWithTangent: function() { var t = q.read(arguments); if(t.isZero()) return []; for(var e = [], r = 0, n = this.getCurves(), s = 0, u = n.length; s < u; s++) { for(var h = n[s], o = h.getTimesWithTangent(t), l = 0, f = o.length; l < f; l++) { var g = r + h.getOffsetAtTime(o[l]);
                                            e.indexOf(g) < 0 && e.push(g) } r += h.length } return e } }), new function() {
                                function t(r, n, s, u) { if(u <= 0) return; var h = u / 2,
                                        o = u - 2,
                                        l = h - 1,
                                        f = new Array(6),
                                        g, v;

                                    function d(A) { var c = f[A],
                                            C = f[A + 1];
                                        (g != c || v != C) && (r.beginPath(), r.moveTo(g, v), r.lineTo(c, C), r.stroke(), r.beginPath(), r.arc(c, C, h, 0, Math.PI * 2, !0), r.fill()) } for(var p = 0, x = n.length; p < x; p++) { var y = n[p],
                                            w = y._selection; if(y._transformCoordinates(s, f), g = f[0], v = f[1], w & 2 && d(2), w & 4 && d(4), r.fillRect(g - h, v - h, u, u), o > 0 && !(w & 1)) { var _ = r.fillStyle;
                                            r.fillStyle = "#ffffff", r.fillRect(g - l, v - l, o, o), r.fillStyle = _ } } }

                                function e(r, n, s) { var u = n._segments,
                                        h = u.length,
                                        o = new Array(6),
                                        l = !0,
                                        f, g, v, d, p, x, y, w;

                                    function _(c) { if(s) c._transformCoordinates(s, o), f = o[0], g = o[1];
                                        else { var C = c._point;
                                            f = C._x, g = C._y } if(l) r.moveTo(f, g), l = !1;
                                        else { if(s) p = o[2], x = o[3];
                                            else { var S = c._handleIn;
                                                p = f + S._x, x = g + S._y } p === f && x === g && y === v && w === d ? r.lineTo(f, g) : r.bezierCurveTo(y, w, p, x, f, g) } if(v = f, d = g, s) y = o[4], w = o[5];
                                        else { var S = c._handleOut;
                                            y = v + S._x, w = d + S._y } } for(var A = 0; A < h; A++) _(u[A]);
                                    n._closed && h > 0 && _(u[0]) } return { _draw: function(r, n, s, u) { var h = n.dontStart,
                                            o = n.dontFinish || n.clip,
                                            l = this.getStyle(),
                                            f = l.hasFill(),
                                            g = l.hasStroke(),
                                            v = l.getDashArray(),
                                            d = !dt.support.nativeDash && g && v && v.length;
                                        h || r.beginPath(), (f || g && !d || o) && (e(r, this, u), this._closed && r.closePath());

                                        function p(c) { return v[(c % d + d) % d] } if(!o && (f || g) && (this._setStyles(r, n, s), f && (r.fill(l.getFillRule()), r.shadowColor = "rgba(0,0,0,0)"), g)) { if(d) { h || r.beginPath(); for(var x = new Ne(this, .25, 32, !1, u), y = x.length, w = -l.getDashOffset(), _, A = 0; w > 0;) w -= p(A--) + p(A--); for(; w < y;) _ = w + p(A++), (w > 0 || _ > 0) && x.drawPart(r, Math.max(w, 0), Math.max(_, 0)), w = _ + p(A++) } r.stroke() } }, _drawSelected: function(r, n) { r.beginPath(), e(r, this, n), r.stroke(), t(r, this._segments, n, dt.settings.handleSize) } } }, new function() {
                                function t(e) { var r = e._segments; if(!r.length) throw new Error("Use a moveTo() command first"); return r[r.length - 1] } return { moveTo: function() { var e = this._segments;
                                        e.length === 1 && this.removeSegment(0), e.length || this._add([new ct(q.read(arguments))]) }, moveBy: function() { throw new Error("moveBy() is unsupported on Path items.") }, lineTo: function() { this._add([new ct(q.read(arguments))]) }, cubicCurveTo: function() { var e = arguments,
                                            r = q.read(e),
                                            n = q.read(e),
                                            s = q.read(e),
                                            u = t(this);
                                        u.setHandleOut(r.subtract(u._point)), this._add([new ct(s, n.subtract(s))]) }, quadraticCurveTo: function() { var e = arguments,
                                            r = q.read(e),
                                            n = q.read(e),
                                            s = t(this)
                                            ._point;
                                        this.cubicCurveTo(r.add(s.subtract(r)
                                            .multiply(1 / 3)), r.add(n.subtract(r)
                                            .multiply(1 / 3)), n) }, curveTo: function() { var e = arguments,
                                            r = q.read(e),
                                            n = q.read(e),
                                            s = M.pick(M.read(e), .5),
                                            u = 1 - s,
                                            h = t(this)
                                            ._point,
                                            o = r.subtract(h.multiply(u * u))
                                            .subtract(n.multiply(s * s))
                                            .divide(2 * s * u); if(o.isNaN()) throw new Error("Cannot put a curve through points with parameter = " + s);
                                        this.quadraticCurveTo(o, n) }, arcTo: function() { var e = arguments,
                                            r = Math.abs,
                                            n = Math.sqrt,
                                            s = t(this),
                                            u = s._point,
                                            h = q.read(e),
                                            o, l = M.peek(e),
                                            f = M.pick(l, !0),
                                            g, v, d, p; if(typeof f == "boolean") var x = u.add(h)
                                            .divide(2),
                                            o = x.add(x.subtract(u)
                                                .rotate(f ? -90 : 90));
                                        else if(M.remain(e) <= 2) o = h, h = q.read(e);
                                        else if(!u.equals(h)) { var y = ot.read(e),
                                                w = Ft.isZero; if(w(y.width) || w(y.height)) return this.lineTo(h); var _ = M.read(e),
                                                f = !!M.read(e),
                                                A = !!M.read(e),
                                                x = u.add(h)
                                                .divide(2),
                                                c = u.subtract(x)
                                                .rotate(-_),
                                                C = c.x,
                                                S = c.y,
                                                F = r(y.width),
                                                b = r(y.height),
                                                B = F * F,
                                                I = b * b,
                                                D = C * C,
                                                N = S * S,
                                                L = n(D / B + N / I); if(L > 1 && (F *= L, b *= L, B = F * F, I = b * b), L = (B * I - B * N - I * D) / (B * N + I * D), r(L) < 1e-12 && (L = 0), L < 0) throw new Error("Cannot create an arc with the given arguments");
                                            g = new q(F * S / b, -b * C / F)
                                                .multiply((A === f ? -1 : 1) * n(L))
                                                .rotate(_)
                                                .add(x), p = new lt()
                                                .translate(g)
                                                .rotate(_)
                                                .scale(F, b), d = p._inverseTransform(u), v = d.getDirectedAngle(p._inverseTransform(h)), !f && v > 0 ? v -= 360 : f && v < 0 && (v += 360) } if(o) { var V = new k(u.add(o)
                                                    .divide(2), o.subtract(u)
                                                    .rotate(90), !0),
                                                O = new k(o.add(h)
                                                    .divide(2), h.subtract(o)
                                                    .rotate(90), !0),
                                                R = new k(u, h),
                                                U = R.getSide(o); if(g = V.intersect(O, !0), !g) { if(!U) return this.lineTo(h); throw new Error("Cannot create an arc with the given arguments") } d = u.subtract(g), v = d.getDirectedAngle(h.subtract(g)); var j = R.getSide(g, !0);
                                            j === 0 ? v = U * r(v) : U === j && (v += v < 0 ? 360 : -360) } if(v) { for(var K = 1e-5, J = r(v), rt = J >= 360 ? 4 : Math.ceil((J - K) / 90), st = v / rt, Z = st * Math.PI / 360, Q = 4 / 3 * Math.sin(Z) / (1 + Math.cos(Z)), $ = [], ut = 0; ut <= rt; ut++) { var c = h,
                                                    at = null; if(ut < rt && (at = d.rotate(90)
                                                        .multiply(Q), p ? (c = p._transformPoint(d), at = p._transformPoint(d.add(at))
                                                            .subtract(c)) : c = g.add(d)), !ut) s.setHandleOut(at);
                                                else { var pt = d.rotate(-90)
                                                        .multiply(Q);
                                                    p && (pt = p._transformPoint(d.add(pt))
                                                        .subtract(c)), $.push(new ct(c, pt, at)) } d = d.rotate(st) } this._add($) } }, lineBy: function() { var e = q.read(arguments),
                                            r = t(this)
                                            ._point;
                                        this.lineTo(r.add(e)) }, curveBy: function() { var e = arguments,
                                            r = q.read(e),
                                            n = q.read(e),
                                            s = M.read(e),
                                            u = t(this)
                                            ._point;
                                        this.curveTo(u.add(r), u.add(n), s) }, cubicCurveBy: function() { var e = arguments,
                                            r = q.read(e),
                                            n = q.read(e),
                                            s = q.read(e),
                                            u = t(this)
                                            ._point;
                                        this.cubicCurveTo(u.add(r), u.add(n), u.add(s)) }, quadraticCurveBy: function() { var e = arguments,
                                            r = q.read(e),
                                            n = q.read(e),
                                            s = t(this)
                                            ._point;
                                        this.quadraticCurveTo(s.add(r), s.add(n)) }, arcBy: function() { var e = arguments,
                                            r = t(this)
                                            ._point,
                                            n = r.add(q.read(e)),
                                            s = M.pick(M.peek(e), !0);
                                        typeof s == "boolean" ? this.arcTo(n, s) : this.arcTo(n, r.add(q.read(e))) }, closePath: function(e) { this.setClosed(!0), this.join(this, e) } } }, { _getBounds: function(t, e) { var r = e.handle ? "getHandleBounds" : e.stroke ? "getStrokeBounds" : "getBounds"; return Bt[r](this._segments, this._closed, this, t, e) }, statics: { getBounds: function(t, e, r, n, s, u) { var h = t[0]; if(!h) return new ht; var o = new Array(6),
                                            l = h._transformCoordinates(n, new Array(6)),
                                            f = l.slice(0, 2),
                                            g = f.slice(),
                                            v = new Array(2);

                                        function d(y) { y._transformCoordinates(n, o); for(var w = 0; w < 2; w++) it._addBounds(l[w], l[w + 4], o[w + 2], o[w], w, u ? u[w] : 0, f, g, v); var _ = l;
                                            l = o, o = _ } for(var p = 1, x = t.length; p < x; p++) d(t[p]); return e && d(h), new ht(f[0], f[1], g[0] - f[0], g[1] - f[1]) }, getStrokeBounds: function(t, e, r, n, s) { var u = r.getStyle(),
                                            h = u.hasStroke(),
                                            o = u.getStrokeWidth(),
                                            l = h && r._getStrokeMatrix(n, s),
                                            f = h && Bt._getStrokePadding(o, l),
                                            g = Bt.getBounds(t, e, r, n, s, f); if(!h) return g; var v = o / 2,
                                            d = u.getStrokeJoin(),
                                            p = u.getStrokeCap(),
                                            x = u.getMiterLimit(),
                                            y = new ht(new ot(f));

                                        function w(F) { g = g.include(F) }

                                        function _(F) { g = g.unite(y.setCenter(F._point.transform(n))) }

                                        function A(F, b) { b === "round" || F.isSmooth() ? _(F) : Bt._addBevelJoin(F, b, v, x, n, l, w) }

                                        function c(F, b) { b === "round" ? _(F) : Bt._addSquareCap(F, b, v, n, l, w) } var C = t.length - (e ? 0 : 1); if(C > 0) { for(var S = 1; S < C; S++) A(t[S], d);
                                            e ? A(t[0], d) : (c(t[0], p), c(t[t.length - 1], p)) } return g }, _getStrokePadding: function(t, e) { if(!e) return [t, t]; var r = new q(t, 0)
                                            .transform(e),
                                            n = new q(0, t)
                                            .transform(e),
                                            s = r.getAngleInRadians(),
                                            u = r.getLength(),
                                            h = n.getLength(),
                                            o = Math.sin(s),
                                            l = Math.cos(s),
                                            f = Math.tan(s),
                                            g = Math.atan2(h * f, u),
                                            v = Math.atan2(h, f * u); return [Math.abs(u * Math.cos(g) * l + h * Math.sin(g) * o), Math.abs(h * Math.sin(v) * l + u * Math.cos(v) * o)] }, _addBevelJoin: function(t, e, r, n, s, u, h, o) { var l = t.getCurve(),
                                            f = l.getPrevious(),
                                            g = l.getPoint1()
                                            .transform(s),
                                            v = f.getNormalAtTime(1)
                                            .multiply(r)
                                            .transform(u),
                                            d = l.getNormalAtTime(0)
                                            .multiply(r)
                                            .transform(u),
                                            p = v.getDirectedAngle(d); if((p < 0 || p >= 180) && (v = v.negate(), d = d.negate()), o && h(g), h(g.add(v)), e === "miter") { var x = new k(g.add(v), new q(-v.y, v.x), !0)
                                                .intersect(new k(g.add(d), new q(-d.y, d.x), !0), !0);
                                            x && g.getDistance(x) <= n * r && h(x) } h(g.add(d)) }, _addSquareCap: function(t, e, r, n, s, u, h) { var o = t._point.transform(n),
                                            l = t.getLocation(),
                                            f = l.getNormal()
                                            .multiply(l.getTime() === 0 ? r : -r)
                                            .transform(s);
                                        e === "square" && (h && (u(o.subtract(f)), u(o.add(f))), o = o.add(f.rotate(-90))), u(o.add(f)), u(o.subtract(f)) }, getHandleBounds: function(t, e, r, n, s) { var u = r.getStyle(),
                                            h = s.stroke && u.hasStroke(),
                                            o, l; if(h) { var f = r._getStrokeMatrix(n, s),
                                                g = u.getStrokeWidth() / 2,
                                                v = g;
                                            u.getStrokeJoin() === "miter" && (v = g * u.getMiterLimit()), u.getStrokeCap() === "square" && (v = Math.max(v, g * Math.SQRT2)), o = Bt._getStrokePadding(g, f), l = Bt._getStrokePadding(v, f) } for(var d = new Array(6), p = 1 / 0, x = -p, y = p, w = x, _ = 0, A = t.length; _ < A; _++) { var c = t[_];
                                            c._transformCoordinates(n, d); for(var C = 0; C < 6; C += 2) { var S = C ? o : l,
                                                    F = S ? S[0] : 0,
                                                    b = S ? S[1] : 0,
                                                    B = d[C],
                                                    I = d[C + 1],
                                                    D = B - F,
                                                    N = B + F,
                                                    L = I - b,
                                                    V = I + b;
                                                D < p && (p = D), N > x && (x = N), L < y && (y = L), V > w && (w = V) } } return new ht(p, y, x - p, w - y) } } });
                        Bt.inject({ statics: new function() { var t = .5522847498307936,
                                    e = [new ct([-1, 0], [0, t], [0, -t]), new ct([0, -1], [-t, 0], [t, 0]), new ct([1, 0], [0, -t], [0, t]), new ct([0, 1], [t, 0], [-t, 0])];

                                function r(s, u, h) { var o = M.getNamed(h),
                                        l = new Bt(o && (o.insert == !0 ? Ct.INSERT : o.insert == !1 ? Ct.NO_INSERT : null)); return l._add(s), l._closed = u, l.set(o, Ct.INSERT) }

                                function n(s, u, h) { for(var o = new Array(4), l = 0; l < 4; l++) { var f = e[l];
                                        o[l] = new ct(f._point.multiply(u)
                                            .add(s), f._handleIn.multiply(u), f._handleOut.multiply(u)) } return r(o, !0, h) } return { Line: function() { var s = arguments; return r([new ct(q.readNamed(s, "from")), new ct(q.readNamed(s, "to"))], !1, s) }, Circle: function() { var s = arguments,
                                            u = q.readNamed(s, "center"),
                                            h = M.readNamed(s, "radius"); return n(u, new ot(h), s) }, Rectangle: function() { var s = arguments,
                                            u = ht.readNamed(s, "rectangle"),
                                            h = ot.readNamed(s, "radius", 0, { readNull: !0 }),
                                            o = u.getBottomLeft(!0),
                                            l = u.getTopLeft(!0),
                                            f = u.getTopRight(!0),
                                            g = u.getBottomRight(!0),
                                            v; if(!h || h.isZero()) v = [new ct(o), new ct(l), new ct(f), new ct(g)];
                                        else { h = ot.min(h, u.getSize(!0)
                                                .divide(2)); var d = h.width,
                                                p = h.height,
                                                x = d * t,
                                                y = p * t;
                                            v = [new ct(o.add(d, 0), null, [-x, 0]), new ct(o.subtract(0, p), [0, y]), new ct(l.add(0, p), null, [0, -y]), new ct(l.add(d, 0), [-x, 0], null), new ct(f.subtract(d, 0), null, [x, 0]), new ct(f.add(0, p), [0, -y], null), new ct(g.subtract(0, p), null, [0, y]), new ct(g.subtract(d, 0), [x, 0])] } return r(v, !0, s) }, RoundRectangle: "#Rectangle", Ellipse: function() { var s = arguments,
                                            u = ue._readEllipse(s); return n(u.center, u.radius, s) }, Oval: "#Ellipse", Arc: function() { var s = arguments,
                                            u = q.readNamed(s, "from"),
                                            h = q.readNamed(s, "through"),
                                            o = q.readNamed(s, "to"),
                                            l = M.getNamed(s),
                                            f = new Bt(l && l.insert == !1 && Ct.NO_INSERT); return f.moveTo(u), f.arcTo(h, o), f.set(l) }, RegularPolygon: function() { for(var s = arguments, u = q.readNamed(s, "center"), h = M.readNamed(s, "sides"), o = M.readNamed(s, "radius"), l = 360 / h, f = h % 3 === 0, g = new q(0, f ? -o : o), v = f ? -1 : .5, d = new Array(h), p = 0; p < h; p++) d[p] = new ct(u.add(g.rotate((p + v) * l))); return r(d, !0, s) }, Star: function() { for(var s = arguments, u = q.readNamed(s, "center"), h = M.readNamed(s, "points") * 2, o = M.readNamed(s, "radius1"), l = M.readNamed(s, "radius2"), f = 360 / h, g = new q(0, -1), v = new Array(h), d = 0; d < h; d++) v[d] = new ct(u.add(g.rotate(f * d)
                                            .multiply(d % 2 ? l : o))); return r(v, !0, s) } } } }); var oe = ge.extend({ _class: "CompoundPath", _serializeFields: { children: [] }, beans: !0, initialize: function(e) { this._children = [], this._namedChildren = {}, this._initialize(e) || (typeof e == "string" ? this.setPathData(e) : this.addChildren(Array.isArray(e) ? e : arguments)) }, insertChildren: function t(e, r) { var n = r,
                                    s = n[0];
                                s && typeof s[0] == "number" && (n = [n]); for(var u = r.length - 1; u >= 0; u--) { var h = n[u];
                                    n === r && !(h instanceof Bt) && (n = M.slice(n)), Array.isArray(h) ? n[u] = new Bt({ segments: h, insert: !1 }) : h instanceof oe && (n.splice.apply(n, [u, 1].concat(h.removeChildren())), h.remove()) } return t.base.call(this, e, n) }, reduce: function t(e) { for(var r = this._children, n = r.length - 1; n >= 0; n--) { var s = r[n].reduce(e);
                                    s.isEmpty() && s.remove() } if(!r.length) { var s = new Bt(Ct.NO_INSERT); return s.copyAttributes(this), s.insertAbove(this), this.remove(), s } return t.base.call(this) }, isClosed: function() { for(var t = this._children, e = 0, r = t.length; e < r; e++)
                                    if(!t[e]._closed) return !1; return !0 }, setClosed: function(t) { for(var e = this._children, r = 0, n = e.length; r < n; r++) e[r].setClosed(t) }, getFirstSegment: function() { var t = this.getFirstChild(); return t && t.getFirstSegment() }, getLastSegment: function() { var t = this.getLastChild(); return t && t.getLastSegment() }, getCurves: function() { for(var t = this._children, e = [], r = 0, n = t.length; r < n; r++) M.push(e, t[r].getCurves()); return e }, getFirstCurve: function() { var t = this.getFirstChild(); return t && t.getFirstCurve() }, getLastCurve: function() { var t = this.getLastChild(); return t && t.getLastCurve() }, getArea: function() { for(var t = this._children, e = 0, r = 0, n = t.length; r < n; r++) e += t[r].getArea(); return e }, getLength: function() { for(var t = this._children, e = 0, r = 0, n = t.length; r < n; r++) e += t[r].getLength(); return e }, getPathData: function(t, e) { for(var r = this._children, n = [], s = 0, u = r.length; s < u; s++) { var h = r[s],
                                        o = h._matrix;
                                    n.push(h.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e)) } return n.join("") }, _hitTestChildren: function t(e, r, n) { return t.base.call(this, e, r.class === Bt || r.type === "path" ? r : M.set({}, r, { fill: !1 }), n) }, _draw: function(t, e, r, n) { var s = this._children; if(s.length) { e = e.extend({ dontStart: !0, dontFinish: !0 }), t.beginPath(); for(var u = 0, h = s.length; u < h; u++) s[u].draw(t, e, n); if(!e.clip) { this._setStyles(t, e, r); var o = this._style;
                                        o.hasFill() && (t.fill(o.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), o.hasStroke() && t.stroke() } } }, _drawSelected: function(t, e, r) { for(var n = this._children, s = 0, u = n.length; s < u; s++) { var h = n[s],
                                        o = h._matrix;
                                    r[h._id] || h._drawSelected(t, o.isIdentity() ? e : e.appended(o)) } } }, new function() {
                            function t(e, r) { var n = e._children; if(r && !n.length) throw new Error("Use a moveTo() command first"); return n[n.length - 1] } return M.each(["lineTo", "cubicCurveTo", "quadraticCurveTo", "curveTo", "arcTo", "lineBy", "cubicCurveBy", "quadraticCurveBy", "curveBy", "arcBy"], function(e) { this[e] = function() { var r = t(this, !0);
                                    r[e].apply(r, arguments) } }, { moveTo: function() { var e = t(this),
                                        r = e && e.isEmpty() ? e : new Bt(Ct.NO_INSERT);
                                    r !== e && this.addChild(r), r.moveTo.apply(r, arguments) }, moveBy: function() { var e = t(this, !0),
                                        r = e && e.getLastSegment(),
                                        n = q.read(arguments);
                                    this.moveTo(r ? n.add(r._point) : n) }, closePath: function(e) { t(this, !0)
                                        .closePath(e) } }) }, M.each(["reverse", "flatten", "simplify", "smooth"], function(t) { this[t] = function(e) { for(var r = this._children, n, s = 0, u = r.length; s < u; s++) n = r[s][t](e) || n; return n } }, {}));
                        ge.inject(new function() { var t = Math.min,
                                e = Math.max,
                                r = Math.abs,
                                n = { unite: { 1: !0, 2: !0 }, intersect: { 2: !0 }, subtract: { 1: !0 }, exclude: { 1: !0, "-1": !0 } };

                            function s(_) { return _._children || [_] }

                            function u(_, A) { var c = _.clone(!1)
                                    .reduce({ simplify: !0 })
                                    .transform(null, !0, !0); if(A) { for(var C = s(c), S = 0, F = C.length; S < F; S++) { var _ = C[S];!_._closed && !_.isEmpty() && (_.closePath(1e-12), _.getFirstSegment()
                                            .setHandleIn(0, 0), _.getLastSegment()
                                            .setHandleOut(0, 0)) } c = c.resolveCrossings()
                                        .reorient(c.getFillRule() === "nonzero", !0) } return c }

                            function h(_, A, c, C, S) { var F = new oe(Ct.NO_INSERT); return F.addChildren(_, !0), F = F.reduce({ simplify: A }), S && S.insert == !1 || F.insertAbove(C && c.isSibling(C) && c.getIndex() < C.getIndex() ? C : c), F.copyAttributes(c, !0), F }

                            function o(_) { return _.hasOverlap() || _.isCrossing() }

                            function l(_, A, c, C) { if(C && (C.trace == !1 || C.stroke) && /^(subtract|intersect)$/.test(c)) return f(_, A, c); var S = u(_, !0),
                                    F = A && _ !== A && u(A, !0),
                                    b = n[c];
                                b[c] = !0, F && (b.subtract || b.exclude) ^ (F.isClockwise() ^ S.isClockwise()) && F.reverse(); var B = p($t.expand(S.getIntersections(F, o))),
                                    I = s(S),
                                    D = F && s(F),
                                    N = [],
                                    L = [],
                                    V;

                                function O(at) { for(var pt = 0, ft = at.length; pt < ft; pt++) { var _t = at[pt];
                                        M.push(N, _t._segments), M.push(L, _t.getCurves()), _t._overlapsOnly = !0 } }

                                function R(at) { for(var pt = [], ft = 0, _t = at && at.length; ft < _t; ft++) pt.push(L[at[ft]]); return pt } if(B.length) { O(I), D && O(D); for(var U = new Array(L.length), j = 0, K = L.length; j < K; j++) U[j] = L[j].getValues(); for(var J = ri.findCurveBoundsCollisions(U, U, 0, !0), rt = {}, j = 0; j < L.length; j++) { var st = L[j],
                                            Z = st._path._id,
                                            Q = rt[Z] = rt[Z] || {};
                                        Q[st.getIndex()] = { hor: R(J[j].hor), ver: R(J[j].ver) } } for(var j = 0, K = B.length; j < K; j++) y(B[j]._segment, S, F, rt, b); for(var j = 0, K = N.length; j < K; j++) { var $ = N[j],
                                            ut = $._intersection;
                                        $._winding || y($, S, F, rt, b), ut && ut._overlap || ($._path._overlapsOnly = !1) } V = w(N, b) } else V = d(D ? I.concat(D) : I.slice(), function(at) { return !!b[at] }); return h(V, !0, _, A, C) }

                            function f(_, A, c) { var C = u(_),
                                    S = u(A),
                                    F = C.getIntersections(S, o),
                                    b = c === "subtract",
                                    B = c === "divide",
                                    I = {},
                                    D = [];

                                function N(O) { if(!I[O._id] && (B || S.contains(O.getPointAt(O.getLength() / 2)) ^ b)) return D.unshift(O), I[O._id] = !0 } for(var L = F.length - 1; L >= 0; L--) { var V = F[L].split();
                                    V && (N(V) && V.getFirstSegment()
                                        .setHandleIn(0, 0), C.getLastSegment()
                                        .setHandleOut(0, 0)) } return N(C), h(D, !1, _, A) }

                            function g(_, A) { for(var c = _; c;) { if(c === A) return;
                                    c = c._previous } for(; _._next && _._next !== A;) _ = _._next; if(!_._next) { for(; A._previous;) A = A._previous;
                                    _._next = A, A._previous = _ } }

                            function v(_) { for(var A = _.length - 1; A >= 0; A--) _[A].clearHandles() }

                            function d(_, A, c) { var C = _ && _.length; if(C) { var S = M.each(_, function(J, rt) { this[J._id] = { container: null, winding: J.isClockwise() ? 1 : -1, index: rt } }, {}),
                                        F = _.slice()
                                        .sort(function(J, rt) { return r(rt.getArea()) - r(J.getArea()) }),
                                        b = F[0],
                                        B = ri.findItemBoundsCollisions(F, null, Ft.GEOMETRIC_EPSILON);
                                    c == null && (c = b.isClockwise()); for(var I = 0; I < C; I++) { var D = F[I],
                                            N = S[D._id],
                                            L = 0,
                                            V = B[I]; if(V) { for(var O = null, R = V.length - 1; R >= 0; R--)
                                                if(V[R] < I) { O = O || D.getInteriorPoint(); var U = F[V[R]]; if(U.contains(O)) { var j = S[U._id];
                                                        L = j.winding, N.winding += L, N.container = j.exclude ? j.container : U; break } } } if(A(N.winding) === A(L)) N.exclude = !0, _[N.index] = null;
                                        else { var K = N.container;
                                            D.setClockwise(K ? !K.isClockwise() : c) } } } return _ }

                            function p(_, A, c) { var C = A && [],
                                    S = 1e-8,
                                    F = 1 - S,
                                    b = !1,
                                    B = c || [],
                                    I = c && {},
                                    D, N, L;

                                function V(pt) { return pt._path._id + "." + pt._segment1._index } for(var O = (c && c.length) - 1; O >= 0; O--) { var R = c[O];
                                    R._path && (I[V(R)] = !0) } for(var O = _.length - 1; O >= 0; O--) { var U = _[O],
                                        j = U._time,
                                        K = j,
                                        J = A && !A(U),
                                        R = U._curve,
                                        rt; if(R && (R !== N ? (b = !R.hasHandles() || I && I[V(R)], D = [], L = null, N = R) : L >= S && (j /= L)), J) { D && D.push(U); continue } else A && C.unshift(U); if(L = K, j < S) rt = R._segment1;
                                    else if(j > F) rt = R._segment2;
                                    else { var st = R.divideAtTime(j, !0);
                                        b && B.push(R, st), rt = st._segment1; for(var Z = D.length - 1; Z >= 0; Z--) { var Q = D[Z];
                                            Q._time = (Q._time - j) / (1 - j) } } U._setSegment(rt); var $ = rt._intersection,
                                        ut = U._intersection; if($) { g($, ut); for(var at = $; at;) g(at._intersection, $), at = at._next } else rt._intersection = ut } return c || v(B), C || _ }

                            function x(_, A, c, C, S) { var F = Array.isArray(A) ? A : A[c ? "hor" : "ver"],
                                    b = c ? 1 : 0,
                                    B = b ^ 1,
                                    I = [_.x, _.y],
                                    D = I[b],
                                    N = I[B],
                                    L = 1e-9,
                                    V = 1e-6,
                                    O = D - L,
                                    R = D + L,
                                    U = 0,
                                    j = 0,
                                    K = 0,
                                    J = 0,
                                    rt = !1,
                                    st = !1,
                                    Z = 1,
                                    Q = [],
                                    $, ut;

                                function at(Pt) { var Gt = Pt[B + 0],
                                        he = Pt[B + 6]; if(!(N < t(Gt, he) || N > e(Gt, he))) { var Lt = Pt[b + 0],
                                            qt = Pt[b + 2],
                                            Fe = Pt[b + 4],
                                            ye = Pt[b + 6]; if(Gt === he) {
                                            (Lt < R && ye > O || ye < R && Lt > O) && (rt = !0); return } var Ce = N === Gt ? 0 : N === he || O > e(Lt, qt, Fe, ye) || R < t(Lt, qt, Fe, ye) ? 1 : it.solveCubic(Pt, B, N, Q, 0, 1) > 0 ? Q[0] : 1,
                                            fe = Ce === 0 ? Lt : Ce === 1 ? ye : it.getPoint(Pt, Ce)[c ? "y" : "x"],
                                            _e = Gt > he ? 1 : -1,
                                            ke = $[B] > $[B + 6] ? 1 : -1,
                                            ce = $[b + 6]; return N !== Gt ? (fe < O ? K += _e : fe > R ? J += _e : rt = !0, fe > D - V && fe < D + V && (Z /= 2)) : (_e !== ke ? Lt < O ? K += _e : Lt > R && (J += _e) : Lt != ce && (ce < R && fe > R ? (J += _e, rt = !0) : ce > O && fe < O && (K += _e, rt = !0)), Z /= 4), $ = Pt, !S && fe > O && fe < R && it.getTangent(Pt, Ce)[c ? "x" : "y"] === 0 && x(_, A, !c, C, !0) } }

                                function pt(Pt) { var Gt = Pt[B + 0],
                                        he = Pt[B + 2],
                                        Lt = Pt[B + 4],
                                        qt = Pt[B + 6]; if(N <= e(Gt, he, Lt, qt) && N >= t(Gt, he, Lt, qt)) { for(var Fe = Pt[b + 0], ye = Pt[b + 2], Ce = Pt[b + 4], fe = Pt[b + 6], _e = O > e(Fe, ye, Ce, fe) || R < t(Fe, ye, Ce, fe) ? [Pt] : it.getMonoCurves(Pt, c), ke, ce = 0, We = _e.length; ce < We; ce++)
                                            if(ke = at(_e[ce])) return ke } } for(var ft = 0, _t = F.length; ft < _t; ft++) { var wt = F[ft],
                                        Y = wt._path,
                                        Tt = wt.getValues(),
                                        Xt; if((!ft || F[ft - 1]._path !== Y) && ($ = null, Y._closed || (ut = it.getValues(Y.getLastCurve()
                                            .getSegment2(), wt.getSegment1(), null, !C), ut[B] !== ut[B + 6] && ($ = ut)), !$)) { $ = Tt; for(var te = Y.getLastCurve(); te && te !== wt;) { var jt = te.getValues(); if(jt[B] !== jt[B + 6]) { $ = jt; break } te = te.getPrevious() } } if(Xt = pt(Tt)) return Xt; if(ft + 1 === _t || F[ft + 1]._path !== Y) { if(ut && (Xt = pt(ut))) return Xt;
                                        rt && !K && !J && (K = J = Y.isClockwise(C) ^ c ? 1 : -1), U += K, j += J, K = J = 0, rt && (st = !0, rt = !1), ut = null } } return U = r(U), j = r(j), { winding: e(U, j), windingL: U, windingR: j, quality: Z, onPath: st } }

                            function y(_, A, c, C, S) { var F = [],
                                    b = _,
                                    B = 0,
                                    L;
                                do { var I = _.getCurve(); if(I) { var D = I.getLength();
                                        F.push({ segment: _, curve: I, length: D }), B += D } _ = _.getNext() } while(_ && !_._intersection && _ !== b); for(var N = [.5, .25, .75], L = { winding: 0, quality: -1 }, V = .001, O = 1 - V, R = 0; R < N.length && L.quality < .5; R++)
                                    for(var D = B * N[R], U = 0, j = F.length; U < j; U++) { var K = F[U],
                                            J = K.length; if(D <= J) { var I = K.curve,
                                                rt = I._path,
                                                st = rt._parent,
                                                Z = st instanceof oe ? st : rt,
                                                Q = Ft.clamp(I.getTimeAt(D), V, O),
                                                $ = I.getPointAtTime(Q),
                                                ut = r(I.getTangentAtTime(Q)
                                                    .y) < Math.SQRT1_2,
                                                at = null; if(S.subtract && c) { var pt = Z === A ? c : A,
                                                    ft = pt._getWinding($, ut, !0); if(Z === A && ft.winding || Z === c && !ft.winding) { if(ft.quality < 1) continue;
                                                    at = { winding: 0, quality: 1 } } } at = at || x($, C[rt._id][I.getIndex()], ut, !0), at.quality > L.quality && (L = at); break } D -= J }
                                for(var U = F.length - 1; U >= 0; U--) F[U].segment._winding = L }

                            function w(_, A) { var c = [],
                                    C;

                                function S(_t) { var wt; return !!(_t && !_t._visited && (!A || A[(wt = _t._winding || {})
                                        .winding] && !(A.unite && wt.winding === 2 && wt.windingL && wt.windingR))) }

                                function F(_t) { if(_t) { for(var wt = 0, Y = C.length; wt < Y; wt++)
                                            if(_t === C[wt]) return !0 } return !1 }

                                function b(_t) { for(var wt = _t._segments, Y = 0, Tt = wt.length; Y < Tt; Y++) wt[Y]._visited = !0 }

                                function B(_t, wt) { var Y = _t._intersection,
                                        Tt = Y,
                                        Xt = [];
                                    wt && (C = [_t]);

                                    function te(jt, Pt) { for(; jt && jt !== Pt;) { var Gt = jt._segment,
                                                he = Gt && Gt._path; if(he) { var Lt = Gt.getNext() || he.getFirstSegment(),
                                                    qt = Lt._intersection;
                                                Gt !== _t && (F(Gt) || F(Lt) || Lt && S(Gt) && (S(Lt) || qt && S(qt._segment))) && Xt.push(Gt), wt && C.push(Gt) } jt = jt._next } } if(Y) { for(te(Y); Y && Y._previous;) Y = Y._previous;
                                        te(Y, Tt) } return Xt } _.sort(function(_t, wt) { var Y = _t._intersection,
                                        Tt = wt._intersection,
                                        Xt = !!(Y && Y._overlap),
                                        te = !!(Tt && Tt._overlap),
                                        jt = _t._path,
                                        Pt = wt._path; return Xt ^ te ? Xt ? 1 : -1 : !Y ^ !Tt ? Y ? 1 : -1 : jt !== Pt ? jt._id - Pt._id : _t._index - wt._index }); for(var I = 0, D = _.length; I < D; I++) { var N = _[I],
                                        L = S(N),
                                        V = null,
                                        O = !1,
                                        R = !0,
                                        U = [],
                                        j, K, J; if(L && N._path._overlapsOnly) { var rt = N._path,
                                            st = N._intersection._segment._path;
                                        rt.compare(st) && (rt.getArea() && c.push(rt.clone(!1)), b(rt), b(st), L = !1) } for(; L;) { var Z = !V,
                                            Q = B(N, Z),
                                            $ = Q.shift(),
                                            O = !Z && (F(N) || F($)),
                                            ut = !O && $; if(Z && (V = new Bt(Ct.NO_INSERT), j = null), O) {
                                            (N.isFirst() || N.isLast()) && (R = N._path._closed), N._visited = !0; break } if(ut && j && (U.push(j), j = null), j || (ut && Q.push(N), j = { start: V._segments.length, crossings: Q, visited: K = [], handleIn: J }), ut && (N = $), !S(N)) { V.removeSegments(j.start); for(var at = 0, pt = K.length; at < pt; at++) K[at]._visited = !1;
                                            K.length = 0;
                                            do N = j && j.crossings.shift(), (!N || !N._path) && (N = null, j = U.pop(), j && (K = j.visited, J = j.handleIn)); while(j && !S(N)); if(!N) break } var ft = N.getNext();
                                        V.add(new ct(N._point, J, ft && N._handleOut)), N._visited = !0, K.push(N), N = ft || N._path.getFirstSegment(), J = ft && ft._handleIn } O && (R && (V.getFirstSegment()
                                        .setHandleIn(J), V.setClosed(R)), V.getArea() !== 0 && c.push(V)) } return c } return { _getWinding: function(_, A, c) { return x(_, this.getCurves(), A, c) }, unite: function(_, A) { return l(this, _, "unite", A) }, intersect: function(_, A) { return l(this, _, "intersect", A) }, subtract: function(_, A) { return l(this, _, "subtract", A) }, exclude: function(_, A) { return l(this, _, "exclude", A) }, divide: function(_, A) { return A && (A.trace == !1 || A.stroke) ? f(this, _, "divide") : h([this.subtract(_, A), this.intersect(_, A)], !0, this, _, A) }, resolveCrossings: function() { var _ = this._children,
                                        A = _ || [this];

                                    function c(j, K) { var J = j && j._intersection; return J && J._overlap && J._path === K } var C = !1,
                                        S = !1,
                                        F = this.getIntersections(null, function(j) { return j.hasOverlap() && (C = !0) || j.isCrossing() && (S = !0) }),
                                        b = C && S && []; if(F = $t.expand(F), C)
                                        for(var B = p(F, function(j) { return j.hasOverlap() }, b), I = B.length - 1; I >= 0; I--) { var D = B[I],
                                                N = D._path,
                                                L = D._segment,
                                                V = L.getPrevious(),
                                                O = L.getNext();
                                            c(V, N) && c(O, N) && (L.remove(), V._handleOut._set(0, 0), O._handleIn._set(0, 0), V !== L && !V.getCurve()
                                                .hasLength() && (O._handleIn.set(V._handleIn), V.remove())) } S && (p(F, C && function(j) { var K = j.getCurve(),
                                                J = j.getSegment(),
                                                rt = j._intersection,
                                                st = rt._curve,
                                                Z = rt._segment; if(K && st && K._path && st._path) return !0;
                                            J && (J._intersection = null), Z && (Z._intersection = null) }, b), b && v(b), A = w(M.each(A, function(j) { M.push(this, j._segments) }, []))); var R = A.length,
                                        U; return R > 1 && _ ? (A !== _ && this.setChildren(A), U = this) : R === 1 && !_ && (A[0] !== this && this.setSegments(A[0].removeSegments()), U = this), U || (U = new oe(Ct.NO_INSERT), U.addChildren(A), U = U.reduce(), U.copyAttributes(this), this.replaceWith(U)), U }, reorient: function(_, A) { var c = this._children; return c && c.length ? this.setChildren(d(this.removeChildren(), function(C) { return !!(_ ? C : C & 1) }, A)) : A !== tt && this.setClockwise(A), this }, getInteriorPoint: function() { var _ = this.getBounds(),
                                        A = _.getCenter(!0); if(!this.contains(A)) { for(var c = this.getCurves(), C = A.y, S = [], F = [], b = 0, B = c.length; b < B; b++) { var I = c[b].getValues(),
                                                D = I[1],
                                                N = I[3],
                                                L = I[5],
                                                V = I[7]; if(C >= t(D, N, L, V) && C <= e(D, N, L, V))
                                                for(var O = it.getMonoCurves(I), R = 0, U = O.length; R < U; R++) { var j = O[R],
                                                        K = j[1],
                                                        J = j[7]; if(K !== J && (C >= K && C <= J || C >= J && C <= K)) { var rt = C === K ? j[0] : C === J ? j[6] : it.solveCubic(j, 1, C, F, 0, 1) === 1 ? it.getPoint(j, F[0])
                                                            .x : (j[0] + j[6]) / 2;
                                                        S.push(rt) } } } S.length > 1 && (S.sort(function(st, Z) { return st - Z }), A.x = (S[0] + S[1]) / 2) } return A } } }); var Ne = M.extend({ _class: "PathFlattener", initialize: function(t, e, r, n, s) { var u = [],
                                        h = [],
                                        o = 0,
                                        l = 1 / (r || 32),
                                        f = t._segments,
                                        g = f[0],
                                        v;

                                    function d(w, _) { var A = it.getValues(w, _, s);
                                        u.push(A), p(A, w._index, 0, 1) }

                                    function p(w, _, A, c) { if(c - A > l && !(n && it.isStraight(w)) && !it.isFlatEnough(w, e || .25)) { var C = it.subdivide(w, .5),
                                                S = (A + c) / 2;
                                            p(C[0], _, A, S), p(C[1], _, S, c) } else { var F = w[6] - w[0],
                                                b = w[7] - w[1],
                                                B = Math.sqrt(F * F + b * b);
                                            B > 0 && (o += B, h.push({ offset: o, curve: w, index: _, time: c })) } } for(var x = 1, y = f.length; x < y; x++) v = f[x], d(g, v), g = v;
                                    t._closed && d(v || g, f[0]), this.curves = u, this.parts = h, this.length = o, this.index = 0 }, _get: function(t) { for(var e = this.parts, r = e.length, n, s, u = this.index; s = u, !(!u || e[--u].offset < t);); for(; s < r; s++) { var h = e[s]; if(h.offset >= t) { this.index = s; var o = e[s - 1],
                                                l = o && o.index === h.index ? o.time : 0,
                                                f = o ? o.offset : 0; return { index: h.index, time: l + (h.time - l) * (t - f) / (h.offset - f) } } } return { index: e[r - 1].index, time: 1 } }, drawPart: function(t, e, r) { for(var n = this._get(e), s = this._get(r), u = n.index, h = s.index; u <= h; u++) { var o = it.getPart(this.curves[u], u === n.index ? n.time : 0, u === s.index ? s.time : 1);
                                        u === n.index && t.moveTo(o[0], o[1]), t.bezierCurveTo.apply(t, o.slice(2)) } } }, M.each(it._evaluateMethods, function(t) { this[t + "At"] = function(e) { var r = this._get(e); return it[t](this.curves[r.index], r.time) } }, {})),
                            mi = M.extend({ initialize: function(t) { for(var e = this.points = [], r = t._segments, n = t._closed, s = 0, u, h = r.length; s < h; s++) { var o = r[s].point;
                                        (!u || !u.equals(o)) && e.push(u = o.clone()) } n && (e.unshift(e[e.length - 1]), e.push(e[1])), this.closed = n }, fit: function(t) { var e = this.points,
                                        r = e.length,
                                        n = null; return r > 0 && (n = [new ct(e[0])], r > 1 && (this.fitCubic(n, t, 0, r - 1, e[1].subtract(e[0]), e[r - 2].subtract(e[r - 1])), this.closed && (n.shift(), n.pop()))), n }, fitCubic: function(t, e, r, n, s, u) { var h = this.points; if(n - r === 1) { var o = h[r],
                                            l = h[n],
                                            f = o.getDistance(l) / 3;
                                        this.addCurve(t, [o, o.add(s.normalize(f)), l.add(u.normalize(f)), l]); return } for(var g = this.chordLengthParameterize(r, n), v = Math.max(e, e * e), d, p = !0, x = 0; x <= 4; x++) { var y = this.generateBezier(r, n, g, s, u),
                                            w = this.findMaxError(r, n, y, g); if(w.error < e && p) { this.addCurve(t, y); return } if(d = w.index, w.error >= v) break;
                                        p = this.reparameterize(r, n, g, y), v = w.error } var _ = h[d - 1].subtract(h[d + 1]);
                                    this.fitCubic(t, e, r, d, s, _), this.fitCubic(t, e, d, n, _.negate(), u) }, addCurve: function(t, e) { var r = t[t.length - 1];
                                    r.setHandleOut(e[1].subtract(e[0])), t.push(new ct(e[3], e[2].subtract(e[3]))) }, generateBezier: function(t, e, r, n, s) { for(var u = 1e-12, h = Math.abs, o = this.points, l = o[t], f = o[e], g = [
                                            [0, 0],
                                            [0, 0]
                                        ], v = [0, 0], d = 0, p = e - t + 1; d < p; d++) { var x = r[d],
                                            y = 1 - x,
                                            w = 3 * x * y,
                                            _ = y * y * y,
                                            A = w * y,
                                            c = w * x,
                                            C = x * x * x,
                                            S = n.normalize(A),
                                            F = s.normalize(c),
                                            b = o[t + d].subtract(l.multiply(_ + A))
                                            .subtract(f.multiply(c + C));
                                        g[0][0] += S.dot(S), g[0][1] += S.dot(F), g[1][0] = g[0][1], g[1][1] += F.dot(F), v[0] += S.dot(b), v[1] += F.dot(b) } var B = g[0][0] * g[1][1] - g[1][0] * g[0][1],
                                        I, D; if(h(B) > u) { var N = g[0][0] * v[1] - g[1][0] * v[0],
                                            L = v[0] * g[1][1] - v[1] * g[0][1];
                                        I = L / B, D = N / B } else { var V = g[0][0] + g[0][1],
                                            O = g[1][0] + g[1][1];
                                        I = D = h(V) > u ? v[0] / V : h(O) > u ? v[1] / O : 0 } var R = f.getDistance(l),
                                        U = u * R,
                                        j, K; if(I < U || D < U) I = D = R / 3;
                                    else { var J = f.subtract(l);
                                        j = n.normalize(I), K = s.normalize(D), j.dot(J) - K.dot(J) > R * R && (I = D = R / 3, j = K = null) } return [l, l.add(j || n.normalize(I)), f.add(K || s.normalize(D)), f] }, reparameterize: function(t, e, r, n) { for(var s = t; s <= e; s++) r[s - t] = this.findRoot(n, this.points[s], r[s - t]); for(var s = 1, u = r.length; s < u; s++)
                                        if(r[s] <= r[s - 1]) return !1; return !0 }, findRoot: function(t, e, r) { for(var n = [], s = [], u = 0; u <= 2; u++) n[u] = t[u + 1].subtract(t[u])
                                        .multiply(3); for(var u = 0; u <= 1; u++) s[u] = n[u + 1].subtract(n[u])
                                        .multiply(2); var h = this.evaluate(3, t, r),
                                        o = this.evaluate(2, n, r),
                                        l = this.evaluate(1, s, r),
                                        f = h.subtract(e),
                                        g = o.dot(o) + f.dot(l); return Ft.isMachineZero(g) ? r : r - f.dot(o) / g }, evaluate: function(t, e, r) { for(var n = e.slice(), s = 1; s <= t; s++)
                                        for(var u = 0; u <= t - s; u++) n[u] = n[u].multiply(1 - r)
                                            .add(n[u + 1].multiply(r)); return n[0] }, chordLengthParameterize: function(t, e) { for(var r = [0], n = t + 1; n <= e; n++) r[n - t] = r[n - t - 1] + this.points[n].getDistance(this.points[n - 1]); for(var n = 1, s = e - t; n <= s; n++) r[n] /= r[s]; return r }, findMaxError: function(t, e, r, n) { for(var s = Math.floor((e - t + 1) / 2), u = 0, h = t + 1; h < e; h++) { var o = this.evaluate(3, r, n[h - t]),
                                            l = o.subtract(this.points[h]),
                                            f = l.x * l.x + l.y * l.y;
                                        f >= u && (u = f, s = h) } return { error: u, index: s } } }),
                            Ie = Ct.extend({ _class: "TextItem", _applyMatrix: !1, _canApplyMatrix: !1, _serializeFields: { content: null }, _boundsOptions: { stroke: !1, handle: !1 }, initialize: function(e) { this._content = "", this._lines = []; var r = e && M.isPlainObject(e) && e.x === tt && e.y === tt;
                                    this._initialize(r && e, !r && q.read(arguments)) }, _equals: function(t) { return this._content === t._content }, copyContent: function(t) { this.setContent(t._content) }, getContent: function() { return this._content }, setContent: function(t) { this._content = "" + t, this._lines = this._content.split(/\r\n|\n|\r/mg), this._changed(521) }, isEmpty: function() { return !this._content }, getCharacterStyle: "#getStyle", setCharacterStyle: "#setStyle", getParagraphStyle: "#getStyle", setParagraphStyle: "#setStyle" }),
                            Ii = Ie.extend({ _class: "PointText", initialize: function() { Ie.apply(this, arguments) }, getPoint: function() { var t = this._matrix.getTranslation(); return new xt(t.x, t.y, this, "setPoint") }, setPoint: function() { var t = q.read(arguments);
                                    this.translate(t.subtract(this._matrix.getTranslation())) }, _draw: function(t, e, r) { if(this._content) { this._setStyles(t, e, r); var n = this._lines,
                                            s = this._style,
                                            u = s.hasFill(),
                                            h = s.hasStroke(),
                                            o = s.getLeading(),
                                            l = t.shadowColor;
                                        t.font = s.getFontStyle(), t.textAlign = s.getJustification(); for(var f = 0, g = n.length; f < g; f++) { t.shadowColor = l; var v = n[f];
                                            u && (t.fillText(v, 0, 0), t.shadowColor = "rgba(0,0,0,0)"), h && t.strokeText(v, 0, 0), t.translate(0, o) } } }, _getBounds: function(t, e) { var r = this._style,
                                        n = this._lines,
                                        s = n.length,
                                        u = r.getJustification(),
                                        h = r.getLeading(),
                                        o = this.getView()
                                        .getTextWidth(r.getFontStyle(), n),
                                        l = 0;
                                    u !== "left" && (l -= o / (u === "center" ? 2 : 1)); var f = new ht(l, s ? -.75 * h : 0, o, s * h); return t ? t._transformBounds(f, f) : f } }),
                            Yt = M.extend(new function() { var t = { gray: ["gray"], rgb: ["red", "green", "blue"], hsb: ["hue", "saturation", "brightness"], hsl: ["hue", "saturation", "lightness"], gradient: ["gradient", "origin", "destination", "highlight"] },
                                    e = {},
                                    r = { transparent: [0, 0, 0, 0] },
                                    n;

                                function s(o) { var l = o.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i) || o.match(/^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i),
                                        f = "rgb",
                                        g; if(l) { var v = l[4] ? 4 : 3;
                                        g = new Array(v); for(var d = 0; d < v; d++) { var p = l[d + 1];
                                            g[d] = parseInt(p.length == 1 ? p + p : p, 16) / 255 } } else if(l = o.match(/^(rgb|hsl)a?\((.*)\)$/)) { f = l[1], g = l[2].trim()
                                            .split(/[,\s]+/g); for(var x = f === "hsl", d = 0, y = Math.min(g.length, 4); d < y; d++) { var w = g[d],
                                                p = parseFloat(w); if(x)
                                                if(d === 0) { var _ = w.match(/([a-z]*)$/)[1];
                                                    p *= { turn: 360, rad: 180 / Math.PI, grad: .9 } [_] || 1 } else d < 3 && (p /= 100);
                                            else d < 3 && (p /= /%$/.test(w) ? 100 : 255);
                                            g[d] = p } } else { var A = r[o]; if(!A)
                                            if(Ot) { n || (n = Kt.getContext(1, 1, { willReadFrequently: !0 }), n.globalCompositeOperation = "copy"), n.fillStyle = "rgba(0,0,0,0)", n.fillStyle = o, n.fillRect(0, 0, 1, 1); var c = n.getImageData(0, 0, 1, 1)
                                                    .data;
                                                A = r[o] = [c[0] / 255, c[1] / 255, c[2] / 255] } else A = [0, 0, 0];
                                        g = A.slice() } return [f, g] } var u = [
                                        [0, 3, 1],
                                        [2, 0, 1],
                                        [1, 0, 3],
                                        [1, 2, 0],
                                        [3, 1, 0],
                                        [0, 1, 2]
                                    ],
                                    h = { "rgb-hsb": function(o, l, f) { var g = Math.max(o, l, f),
                                                v = Math.min(o, l, f),
                                                d = g - v,
                                                p = d === 0 ? 0 : (g == o ? (l - f) / d + (l < f ? 6 : 0) : g == l ? (f - o) / d + 2 : (o - l) / d + 4) * 60; return [p, g === 0 ? 0 : d / g, g] }, "hsb-rgb": function(o, l, f) { o = (o / 60 % 6 + 6) % 6; var v = Math.floor(o),
                                                g = o - v,
                                                v = u[v],
                                                d = [f, f * (1 - l), f * (1 - l * g), f * (1 - l * (1 - g))]; return [d[v[0]], d[v[1]], d[v[2]]] }, "rgb-hsl": function(o, l, f) { var g = Math.max(o, l, f),
                                                v = Math.min(o, l, f),
                                                d = g - v,
                                                p = d === 0,
                                                x = p ? 0 : (g == o ? (l - f) / d + (l < f ? 6 : 0) : g == l ? (f - o) / d + 2 : (o - l) / d + 4) * 60,
                                                y = (g + v) / 2,
                                                w = p ? 0 : y < .5 ? d / (g + v) : d / (2 - g - v); return [x, w, y] }, "hsl-rgb": function(o, l, f) { if(o = (o / 360 % 1 + 1) % 1, l === 0) return [f, f, f]; for(var g = [o + 1 / 3, o, o - 1 / 3], v = f < .5 ? f * (1 + l) : f + l - f * l, d = 2 * f - v, p = [], x = 0; x < 3; x++) { var y = g[x];
                                                y < 0 && (y += 1), y > 1 && (y -= 1), p[x] = 6 * y < 1 ? d + (v - d) * 6 * y : 2 * y < 1 ? v : 3 * y < 2 ? d + (v - d) * (2 / 3 - y) * 6 : d } return p }, "rgb-gray": function(o, l, f) { return [o * .2989 + l * .587 + f * .114] }, "gray-rgb": function(o) { return [o, o, o] }, "gray-hsb": function(o) { return [0, 0, o] }, "gray-hsl": function(o) { return [0, 0, o] }, "gradient-rgb": function() { return [] }, "rgb-gradient": function() { return [] } }; return M.each(t, function(o, l) { e[l] = [], M.each(o, function(f, g) { var v = M.capitalize(f),
                                            d = /^(hue|saturation)$/.test(f),
                                            p = e[l][g] = l === "gradient" ? f === "gradient" ? function(x) { var y = this._components[0]; return x = ui.read(Array.isArray(x) ? x : arguments, 0, { readNull: !0 }), y !== x && (y && y._removeOwner(this), x && x._addOwner(this)), x } : function() { return q.read(arguments, 0, { readNull: f === "highlight", clone: !0 }) } : function(x) { return x == null || isNaN(x) ? 0 : +x };
                                        this["get" + v] = function() { return this._type === l || d && /^hs[bl]$/.test(this._type) ? this._components[g] : this._convert(l)[g] }, this["set" + v] = function(x) { this._type !== l && !(d && /^hs[bl]$/.test(this._type)) && (this._components = this._convert(l), this._properties = t[l], this._type = l), this._components[g] = p.call(this, x), this._changed() } }, this) }, { _class: "Color", _readIndex: !0, initialize: function o(l) { var f = arguments,
                                            g = this.__read,
                                            v = 0,
                                            d, p, x, y;
                                        Array.isArray(l) && (f = l, l = f[0]); var w = l != null && typeof l; if(w === "string" && l in t && (d = l, l = f[1], Array.isArray(l) ? (p = l, x = f[2]) : (g && (v = 1), f = M.slice(f, 1), w = typeof l)), !p) { if(y = w === "number" ? f : w === "object" && l.length != null ? l : null, y) { d || (d = y.length >= 3 ? "rgb" : "gray"); var _ = t[d].length;
                                                x = y[_], g && (v += y === arguments ? _ + (x != null ? 1 : 0) : 1), y.length > _ && (y = M.slice(y, 0, _)) } else if(w === "string") { var A = s(l);
                                                d = A[0], p = A[1], p.length === 4 && (x = p[3], p.length--) } else if(w === "object")
                                                if(l.constructor === o) { if(d = l._type, p = l._components.slice(), x = l._alpha, d === "gradient")
                                                        for(var c = 1, C = p.length; c < C; c++) { var S = p[c];
                                                            S && (p[c] = S.clone()) } } else if(l.constructor === ui) d = "gradient", y = f;
                                            else { d = "hue" in l ? "lightness" in l ? "hsl" : "hsb" : "gradient" in l || "stops" in l || "radial" in l ? "gradient" : "gray" in l ? "gray" : "rgb"; var F = t[d],
                                                    b = e[d];
                                                this._components = p = []; for(var c = 0, C = F.length; c < C; c++) { var B = l[F[c]];
                                                    B == null && !c && d === "gradient" && "stops" in l && (B = { stops: l.stops, radial: l.radial }), B = b[c].call(this, B), B != null && (p[c] = B) } x = l.alpha } g && d && (v = 1) } if(this._type = d || "rgb", !p) { this._components = p = []; for(var b = e[this._type], c = 0, C = b.length; c < C; c++) { var B = b[c].call(this, y && y[c]);
                                                B != null && (p[c] = B) } } return this._components = p, this._properties = t[this._type], this._alpha = x, g && (this.__read = v), this }, set: "#initialize", _serialize: function(o, l) { var f = this.getComponents(); return M.serialize(/^(gray|rgb)$/.test(this._type) ? f : [this._type].concat(f), o, !0, l) }, _changed: function() { this._canvasStyle = null, this._owner && (this._setter ? this._owner[this._setter](this) : this._owner._changed(129)) }, _convert: function(o) { var l; return this._type === o ? this._components.slice() : (l = h[this._type + "-" + o]) ? l.apply(this, this._components) : h["rgb-" + o].apply(this, h[this._type + "-rgb"].apply(this, this._components)) }, convert: function(o) { return new Yt(o, this._convert(o), this._alpha) }, getType: function() { return this._type }, setType: function(o) { this._components = this._convert(o), this._properties = t[o], this._type = o }, getComponents: function() { var o = this._components.slice(); return this._alpha != null && o.push(this._alpha), o }, getAlpha: function() { return this._alpha != null ? this._alpha : 1 }, setAlpha: function(o) { this._alpha = o == null ? null : Math.min(Math.max(o, 0), 1), this._changed() }, hasAlpha: function() { return this._alpha != null }, equals: function(o) { var l = M.isPlainValue(o, !0) ? Yt.read(arguments) : o; return l === this || l && this._class === l._class && this._type === l._type && this.getAlpha() === l.getAlpha() && M.equals(this._components, l._components) || !1 }, toString: function() { for(var o = this._properties, l = [], f = this._type === "gradient", g = me.instance, v = 0, d = o.length; v < d; v++) { var p = this._components[v];
                                            p != null && l.push(o[v] + ": " + (f ? p : g.number(p))) } return this._alpha != null && l.push("alpha: " + g.number(this._alpha)), "{ " + l.join(", ") + " }" }, toCSS: function(o) { var l = this._convert("rgb"),
                                            f = o || this._alpha == null ? 1 : this._alpha;

                                        function g(v) { return Math.round((v < 0 ? 0 : v > 1 ? 1 : v) * 255) } return l = [g(l[0]), g(l[1]), g(l[2])], f < 1 && l.push(f < 0 ? 0 : f), o ? "#" + ((1 << 24) + (l[0] << 16) + (l[1] << 8) + l[2])
                                            .toString(16)
                                            .slice(1) : (l.length == 4 ? "rgba(" : "rgb(") + l.join(",") + ")" }, toCanvasStyle: function(o, l) { if(this._canvasStyle) return this._canvasStyle; if(this._type !== "gradient") return this._canvasStyle = this.toCSS(); var f = this._components,
                                            g = f[0],
                                            v = g._stops,
                                            d = f[1],
                                            p = f[2],
                                            x = f[3],
                                            y = l && l.inverted(),
                                            w; if(y && (d = y._transformPoint(d), p = y._transformPoint(p), x && (x = y._transformPoint(x))), g._radial) { var _ = p.getDistance(d); if(x) { var A = x.subtract(d);
                                                A.getLength() > _ && (x = d.add(A.normalize(_ - .1))) } var c = x || d;
                                            w = o.createRadialGradient(c.x, c.y, 0, d.x, d.y, _) } else w = o.createLinearGradient(d.x, d.y, p.x, p.y); for(var C = 0, S = v.length; C < S; C++) { var F = v[C],
                                                b = F._offset;
                                            w.addColorStop(b ? ? C / (S - 1), F._color.toCanvasStyle()) } return this._canvasStyle = w }, transform: function(o) { if(this._type === "gradient") { for(var l = this._components, f = 1, g = l.length; f < g; f++) { var v = l[f];
                                                o._transformPoint(v, v, !0) } this._changed() } }, statics: { _types: t, random: function() { var o = Math.random; return new Yt(o(), o(), o()) }, _setOwner: function(o, l, f) { return o && (o._owner && l && o._owner !== l && (o = o.clone()), !o._owner ^ !l && (o._owner = l || null, o._setter = f || null)), o } } }) }, new function() { var t = { add: function(e, r) { return e + r }, subtract: function(e, r) { return e - r }, multiply: function(e, r) { return e * r }, divide: function(e, r) { return e / r } }; return M.each(t, function(e, r) { this[r] = function(n) { n = Yt.read(arguments); for(var s = this._type, u = this._components, h = n._convert(s), o = 0, l = u.length; o < l; o++) h[o] = e(u[o], h[o]); return new Yt(s, h, this._alpha != null ? e(this._alpha, n.getAlpha()) : null) } }, {}) }),
                            ui = M.extend({ _class: "Gradient", initialize: function(e, r) { this._id = de.get(), e && M.isPlainObject(e) && (this.set(e), e = r = null), this._stops == null && this.setStops(e || ["white", "black"]), this._radial == null && this.setRadial(typeof r == "string" && r === "radial" || r || !1) }, _serialize: function(t, e) { return e.add(this, function() { return M.serialize([this._stops, this._radial], t, !0, e) }) }, _changed: function() { for(var t = 0, e = this._owners && this._owners.length; t < e; t++) this._owners[t]._changed() }, _addOwner: function(t) { this._owners || (this._owners = []), this._owners.push(t) }, _removeOwner: function(t) { var e = this._owners ? this._owners.indexOf(t) : -1;
                                    e != -1 && (this._owners.splice(e, 1), this._owners.length || (this._owners = tt)) }, clone: function() { for(var t = [], e = 0, r = this._stops.length; e < r; e++) t[e] = this._stops[e].clone(); return new ui(t, this._radial) }, getStops: function() { return this._stops }, setStops: function(t) { if(t.length < 2) throw new Error("Gradient stop list needs to contain at least two stops."); var e = this._stops; if(e)
                                        for(var r = 0, n = e.length; r < n; r++) e[r]._owner = tt;
                                    e = this._stops = Pe.readList(t, 0, { clone: !0 }); for(var r = 0, n = e.length; r < n; r++) e[r]._owner = this;
                                    this._changed() }, getRadial: function() { return this._radial }, setRadial: function(t) { this._radial = t, this._changed() }, equals: function(t) { if(t === this) return !0; if(t && this._class === t._class) { var e = this._stops,
                                            r = t._stops,
                                            n = e.length; if(n === r.length) { for(var s = 0; s < n; s++)
                                                if(!e[s].equals(r[s])) return !1; return !0 } } return !1 } }),
                            Pe = M.extend({ _class: "GradientStop", initialize: function(e, r) { var n = e,
                                        s = r;
                                    typeof e == "object" && r === tt && (Array.isArray(e) && typeof e[0] != "number" ? (n = e[0], s = e[1]) : ("color" in e || "offset" in e || "rampPoint" in e) && (n = e.color, s = e.offset || e.rampPoint || 0)), this.setColor(n), this.setOffset(s) }, clone: function() { return new Pe(this._color.clone(), this._offset) }, _serialize: function(t, e) { var r = this._color,
                                        n = this._offset; return M.serialize(n == null ? [r] : [r, n], t, !0, e) }, _changed: function() { this._owner && this._owner._changed(129) }, getOffset: function() { return this._offset }, setOffset: function(t) { this._offset = t, this._changed() }, getRampPoint: "#getOffset", setRampPoint: "#setOffset", getColor: function() { return this._color }, setColor: function() { Yt._setOwner(this._color, null), this._color = Yt._setOwner(Yt.read(arguments, 0), this, "setColor"), this._changed() }, equals: function(t) { return t === this || t && this._class === t._class && this._color.equals(t._color) && this._offset == t._offset || !1 } }),
                            Ee = M.extend(new function() { var t = { fillColor: null, fillRule: "nonzero", strokeColor: null, strokeWidth: 1, strokeCap: "butt", strokeJoin: "miter", strokeScaling: !0, miterLimit: 10, dashOffset: 0, dashArray: [], shadowColor: null, shadowBlur: 0, shadowOffset: new q, selectedColor: null },
                                    e = M.set({}, t, { fontFamily: "sans-serif", fontWeight: "normal", fontSize: 12, leading: null, justification: "left" }),
                                    r = M.set({}, e, { fillColor: new Yt }),
                                    n = { strokeWidth: 193, strokeCap: 193, strokeJoin: 193, strokeScaling: 201, miterLimit: 193, fontFamily: 9, fontWeight: 9, fontSize: 9, font: 9, leading: 9, justification: 9 },
                                    s = { beans: !0 },
                                    u = { _class: "Style", beans: !0, initialize: function(o, l, f) { this._values = {}, this._owner = l, this._project = l && l._project || f || dt.project, this._defaults = !l || l instanceof ae ? e : l instanceof Ie ? r : t, o && this.set(o) } }; return M.each(e, function(h, o) { var l = /Color$/.test(o),
                                        f = o === "shadowOffset",
                                        g = M.capitalize(o),
                                        v = n[o],
                                        d = "set" + g,
                                        p = "get" + g;
                                    u[d] = function(x) { var y = this._owner,
                                            w = y && y._children,
                                            _ = w && w.length > 0 && !(y instanceof oe); if(_)
                                            for(var A = 0, c = w.length; A < c; A++) w[A]._style[d](x); if((o === "selectedColor" || !_) && o in this._defaults) { var C = this._values[o];
                                            C !== x && (l && (C && (Yt._setOwner(C, null), C._canvasStyle = null), x && x.constructor === Yt && (x = Yt._setOwner(x, y, _ && d))), this._values[o] = x, y && y._changed(v || 129)) } }, u[p] = function(x) { var y = this._owner,
                                            w = y && y._children,
                                            _ = w && w.length > 0 && !(y instanceof oe),
                                            A; if(_ && !x)
                                            for(var c = 0, C = w.length; c < C; c++) { var S = w[c]._style[p](); if(!c) A = S;
                                                else if(!M.equals(A, S)) return tt } else if(o in this._defaults) { var A = this._values[o]; if(A === tt) A = this._defaults[o], A && A.clone && (A = A.clone());
                                                else { var F = l ? Yt : f ? q : null;
                                                    F && !(A && A.constructor === F) && (this._values[o] = A = F.read([A], 0, { readNull: !0, clone: !0 })) } } return A && l && (A = Yt._setOwner(A, y, _ && d)), A }, s[p] = function(x) { return this._style[p](x) }, s[d] = function(x) { this._style[d](x) } }), M.each({ Font: "FontFamily", WindingRule: "FillRule" }, function(h, o) { var l = "get" + o,
                                        f = "set" + o;
                                    u[l] = s[l] = "#get" + h, u[f] = s[f] = "#set" + h }), Ct.inject(s), u }, { set: function(t) { var e = t instanceof Ee,
                                        r = e ? t._values : t; if(r) { for(var n in r)
                                            if(n in this._defaults) { var s = r[n];
                                                this[n] = s && e && s.clone ? s.clone() : s } } }, equals: function(t) {
                                    function e(r, n, s) { var u = r._values,
                                            h = n._values,
                                            o = n._defaults; for(var l in u) { var f = u[l],
                                                g = h[l]; if(!(s && l in h) && !M.equals(f, g === tt ? o[l] : g)) return !1 } return !0 } return t === this || t && this._class === t._class && e(this, t) && e(t, this, !0) || !1 }, _dispose: function() { var t;
                                    t = this.getFillColor(), t && (t._canvasStyle = null), t = this.getStrokeColor(), t && (t._canvasStyle = null), t = this.getShadowColor(), t && (t._canvasStyle = null) }, hasFill: function() { var t = this.getFillColor(); return !!t && t.alpha > 0 }, hasStroke: function() { var t = this.getStrokeColor(); return !!t && t.alpha > 0 && this.getStrokeWidth() > 0 }, hasShadow: function() { var t = this.getShadowColor(); return !!t && t.alpha > 0 && (this.getShadowBlur() > 0 || !this.getShadowOffset()
                                        .isZero()) }, getView: function() { return this._project._view }, getFontStyle: function() { var t = this.getFontSize(); return this.getFontWeight() + " " + t + (/[a-z]/i.test(t + "") ? " " : "px ") + this.getFontFamily() }, getFont: "#getFontFamily", setFont: "#setFontFamily", getLeading: function t() { var e = t.base.call(this),
                                        r = this.getFontSize(); return /pt|em|%|px/.test(r) && (r = this.getView()
                                        .getPixelSize(r)), e ? ? r * 1.2 } }),
                            Vt = new function() {
                                function t(e, r, n, s) { for(var u = ["", "webkit", "moz", "Moz", "ms", "o"], h = r[0].toUpperCase() + r.substring(1), o = 0; o < 6; o++) { var l = u[o],
                                            f = l ? l + h : r; if(f in e) { if(n) e[f] = s;
                                            else return e[f]; break } } } return { getStyles: function(e) { var r = e && e.nodeType !== 9 ? e.ownerDocument : e,
                                            n = r && r.defaultView; return n && n.getComputedStyle(e, "") }, getBounds: function(e, r) { var n = e.ownerDocument,
                                            s = n.body,
                                            u = n.documentElement,
                                            h; try { h = e.getBoundingClientRect() } catch { h = { left: 0, top: 0, width: 0, height: 0 } } var o = h.left - (u.clientLeft || s.clientLeft || 0),
                                            l = h.top - (u.clientTop || s.clientTop || 0); if(!r) { var f = n.defaultView;
                                            o += f.pageXOffset || u.scrollLeft || s.scrollLeft, l += f.pageYOffset || u.scrollTop || s.scrollTop } return new ht(o, l, h.width, h.height) }, getViewportBounds: function(e) { var r = e.ownerDocument,
                                            n = r.defaultView,
                                            s = r.documentElement; return new ht(0, 0, n.innerWidth || s.clientWidth, n.innerHeight || s.clientHeight) }, getOffset: function(e, r) { return Vt.getBounds(e, r)
                                            .getPoint() }, getSize: function(e) { return Vt.getBounds(e, !0)
                                            .getSize() }, isInvisible: function(e) { return Vt.getSize(e)
                                            .equals(new ot(0, 0)) }, isInView: function(e) { return !Vt.isInvisible(e) && Vt.getViewportBounds(e)
                                            .intersects(Vt.getBounds(e, !0)) }, isInserted: function(e) { return kt.body.contains(e) }, getPrefixed: function(e, r) { return e && t(e, r) }, setPrefixed: function(e, r, n) { if(typeof r == "object")
                                            for(var s in r) t(e, s, !0, r[s]);
                                        else t(e, r, !0, n) } } },
                            Zt = { add: function(t, e) { return; if(t)
                                        for(var r in e)
                                            for(var n = e[r], s = r.split(/[\s,]+/g), u = 0, h = s.length; u < h; u++) { var o = s[u],
                                                    l = t === kt && (o === "touchstart" || o === "touchmove") ? { passive: !1 } : !1;
                                                t.addEventListener(o, n, l) } }, remove: function(t, e) { return; if(t)
                                        for(var r in e)
                                            for(var n = e[r], s = r.split(/[\s,]+/g), u = 0, h = s.length; u < h; u++) t.removeEventListener(s[u], n, !1) }, getPoint: function(t) { var e = t.targetTouches ? t.targetTouches.length ? t.targetTouches[0] : t.changedTouches[0] : t; return new q(e.pageX || e.clientX + kt.documentElement.scrollLeft, e.pageY || e.clientY + kt.documentElement.scrollTop) }, getTarget: function(t) { return t.target || t.srcElement }, getRelatedTarget: function(t) { return t.relatedTarget || t.toElement }, getOffset: function(t, e) { return Zt.getPoint(t)
                                        .subtract(Vt.getOffset(e || Zt.getTarget(t))) } };
                        Zt.requestAnimationFrame = new function() { var t = Vt.getPrefixed(Ot, "requestAnimationFrame"),
                                e = !1,
                                r = [],
                                n;

                            function s() { var u = r;
                                r = []; for(var h = 0, o = u.length; h < o; h++) u[h]();
                                e = t && r.length, e && t(s) } return function(u) { r.push(u), t ? e || (t(s), e = !0) : n || (n = setInterval(s, 16.666666666666668)) } }; var Rt = M.extend(Le, { _class: "View", initialize: function t(e, r) {
                                    function n(v) { return r[v] || parseInt(r.getAttribute(v), 10) }

                                    function s() { var v = Vt.getSize(r); return v.isNaN() || v.isZero() ? new ot(n("width"), n("height")) : v } var u; if(Ot && r) { this._id = r.getAttribute("id"), this._id == null && r.setAttribute("id", this._id = "paper-view-" + t._id++), Zt.add(r, this._viewEvents); var h = "none"; if(Vt.setPrefixed(r.style, { userDrag: h, userSelect: h, touchCallout: h, contentZooming: h, tapHighlightColor: "rgba(0,0,0,0)" }), ve.hasAttribute(r, "resize")) { var o = this;
                                            Zt.add(Ot, this._windowEvents = { resize: function() { o.setViewSize(s()) } }) } if(u = s(), ve.hasAttribute(r, "stats") && typeof Stats < "u") { this._stats = new Stats; var l = this._stats.domElement,
                                                f = l.style,
                                                g = Vt.getOffset(r);
                                            f.position = "absolute", f.left = g.x + "px", f.top = g.y + "px", kt.body.appendChild(l) } } else u = new ot(r), r = null;
                                    this._project = e, this._scope = e._scope, this._element = r, this._pixelRatio || (this._pixelRatio = Ot && Ot.devicePixelRatio || 1), this._setElementSize(u.width, u.height), this._viewSize = u, t._views.push(this), t._viewsById[this._id] = this, (this._matrix = new lt)
                                        ._owner = this, t._focused || (t._focused = this), this._frameItems = {}, this._frameItemCount = 0, this._itemEvents = { native: {}, virtual: {} }, this._autoUpdate = !dt.agent.node, this._needsUpdate = !1 }, remove: function() { if(!this._project) return !1;
                                    Rt._focused === this && (Rt._focused = null), Rt._views.splice(Rt._views.indexOf(this), 1), delete Rt._viewsById[this._id]; var t = this._project; return t._view === this && (t._view = null), Zt.remove(this._element, this._viewEvents), Zt.remove(Ot, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0 }, _events: M.each(Ct._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]), function(t) { this[t] = {} }, { onFrame: { install: function() { this.play() }, uninstall: function() { this.pause() } } }), _animate: !1, _time: 0, _count: 0, getAutoUpdate: function() { return this._autoUpdate }, setAutoUpdate: function(t) { this._autoUpdate = t, t && this.requestUpdate() }, update: function() {}, draw: function() { this.update() }, requestUpdate: function() { if(!this._requested) { var t = this;
                                        Zt.requestAnimationFrame(function() { if(t._requested = !1, t._animate) { t.requestUpdate(); var e = t._element;
                                                (!Vt.getPrefixed(kt, "hidden") || ve.getAttribute(e, "keepalive") === "true") && Vt.isInView(e) && t._handleFrame() } t._autoUpdate && t.update() }), this._requested = !0 } }, play: function() { this._animate = !0, this.requestUpdate() }, pause: function() { this._animate = !1 }, _handleFrame: function() { dt = this._scope; var t = Date.now() / 1e3,
                                        e = this._last ? t - this._last : 0;
                                    this._last = t, this.emit("frame", new M({ delta: e, time: this._time += e, count: this._count++ })), this._stats && this._stats.update() }, _animateItem: function(t, e) { var r = this._frameItems;
                                    e ? (r[t._id] = { item: t, time: 0, count: 0 }, ++this._frameItemCount === 1 && this.on("frame", this._handleFrameItems)) : (delete r[t._id], --this._frameItemCount === 0 && this.off("frame", this._handleFrameItems)) }, _handleFrameItems: function(t) { for(var e in this._frameItems) { var r = this._frameItems[e];
                                        r.item.emit("frame", new M(t, { time: r.time += t.delta, count: r.count++ })) } }, _changed: function() { this._project._changed(4097), this._bounds = this._decomposed = tt }, getElement: function() { return this._element }, getPixelRatio: function() { return this._pixelRatio }, getResolution: function() { return this._pixelRatio * 72 }, getViewSize: function() { var t = this._viewSize; return new ee(t.width, t.height, this, "setViewSize") }, setViewSize: function() { var t = ot.read(arguments),
                                        e = t.subtract(this._viewSize);
                                    e.isZero() || (this._setElementSize(t.width, t.height), this._viewSize.set(t), this._changed(), this.emit("resize", { size: t, delta: e }), this._autoUpdate && this.update()) }, _setElementSize: function(t, e) { var r = this._element;
                                    r && (r.width !== t && (r.width = t), r.height !== e && (r.height = e)) }, getBounds: function() { return this._bounds || (this._bounds = this._matrix.inverted()
                                        ._transformBounds(new ht(new q, this._viewSize))), this._bounds }, getSize: function() { return this.getBounds()
                                        .getSize() }, isVisible: function() { return Vt.isInView(this._element) }, isInserted: function() { return Vt.isInserted(this._element) }, getPixelSize: function(t) { var e = this._element,
                                        r; if(e) { var n = e.parentNode,
                                            s = kt.createElement("div");
                                        s.style.fontSize = t, n.appendChild(s), r = parseFloat(Vt.getStyles(s)
                                            .fontSize), n.removeChild(s) } else r = parseFloat(r); return r }, getTextWidth: function(t, e) { return 0 } }, M.each(["rotate", "scale", "shear", "skew"], function(t) { var e = t === "rotate";
                                this[t] = function() { var r = arguments,
                                        n = (e ? M : q)
                                        .read(r),
                                        s = q.read(r, 0, { readNull: !0 }); return this.transform(new lt()[t](n, s || this.getCenter(!0))) } }, { _decompose: function() { return this._decomposed || (this._decomposed = this._matrix.decompose()) }, translate: function() { var t = new lt; return this.transform(t.translate.apply(t, arguments)) }, getCenter: function() { return this.getBounds()
                                        .getCenter() }, setCenter: function() { var t = q.read(arguments);
                                    this.translate(this.getCenter()
                                        .subtract(t)) }, getZoom: function() { var t = this._decompose()
                                        .scaling; return (t.x + t.y) / 2 }, setZoom: function(t) { this.transform(new lt()
                                        .scale(t / this.getZoom(), this.getCenter())) }, getRotation: function() { return this._decompose()
                                        .rotation }, setRotation: function(t) { var e = this.getRotation();
                                    e != null && t != null && this.rotate(t - e) }, getScaling: function() { var t = this._decompose()
                                        .scaling; return new xt(t.x, t.y, this, "setScaling") }, setScaling: function() { var t = this.getScaling(),
                                        e = q.read(arguments, 0, { clone: !0, readNull: !0 });
                                    t && e && this.scale(e.x / t.x, e.y / t.y) }, getMatrix: function() { return this._matrix }, setMatrix: function() { var t = this._matrix;
                                    t.set.apply(t, arguments) }, transform: function(t) { this._matrix.append(t) }, scrollBy: function() { this.translate(q.read(arguments)
                                        .negate()) } }), { projectToView: function() { return this._matrix._transformPoint(q.read(arguments)) }, viewToProject: function() { return this._matrix._inverseTransform(q.read(arguments)) }, getEventPoint: function(t) { return this.viewToProject(Zt.getOffset(t, this._element)) } }, { statics: { _views: [], _viewsById: {}, _id: 0, create: function(t, e) { kt && typeof e == "string" && (e = kt.getElementById(e)); var r = Ot ? Pi : Rt; return new r(t, e) } } }, new function() { if(!Ot) return; var t, e, r = !1,
                                    n = !1;

                                function s(V) { var O = Zt.getTarget(V); return O.getAttribute && Rt._viewsById[O.getAttribute("id")] }

                                function u() { var V = Rt._focused; if(!V || !V.isVisible()) { for(var O = 0, R = Rt._views.length; O < R; O++)
                                            if((V = Rt._views[O])
                                                .isVisible()) { Rt._focused = e = V; break } } }

                                function h(V, O, R) { V._handleMouseEvent("mousemove", O, R) } var o = Ot.navigator,
                                    l, f, g;
                                o.pointerEnabled || o.msPointerEnabled ? (l = "pointerdown MSPointerDown", f = "pointermove MSPointerMove", g = "pointerup pointercancel MSPointerUp MSPointerCancel") : (l = "touchstart", f = "touchmove", g = "touchend touchcancel", "ontouchstart" in Ot && o.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i) || (l += " mousedown", f += " mousemove", g += " mouseup")); var v = {},
                                    d = { mouseout: function(V) { var O = Rt._focused,
                                                R = Zt.getRelatedTarget(V); if(O && (!R || R.nodeName === "HTML")) { var U = Zt.getOffset(V, O._element),
                                                    j = U.x,
                                                    K = Math.abs,
                                                    J = K(j),
                                                    rt = 1 << 25,
                                                    st = J - rt;
                                                U.x = K(st) < J ? st * (j < 0 ? -1 : 1) : j, h(O, V, O.viewToProject(U)) } }, scroll: u };
                                v[l] = function(V) { var O = Rt._focused = s(V);
                                    r || (r = !0, O._handleMouseEvent("mousedown", V)) }, d[f] = function(V) { var O = Rt._focused; if(!n) { var R = s(V);
                                        R ? O !== R && (O && h(O, V), t || (t = O), O = Rt._focused = e = R) : e && e === O && (t && !t.isInserted() && (t = null), O = Rt._focused = t, t = null, u()) } O && h(O, V) }, d[l] = function() { n = !0 }, d[g] = function(V) { var O = Rt._focused;
                                    O && r && O._handleMouseEvent("mouseup", V), n = r = !1 }, Zt.add(kt, d), Zt.add(Ot, { load: u }); var p = !1,
                                    x = !1,
                                    y = { doubleclick: "click", mousedrag: "mousemove" },
                                    w = !1,
                                    _, A, c, C, S, F, b, B, I;

                                function D(V, O, R, U, j, K, J) { var rt = !1,
                                        st;

                                    function Z(Q, $) { if(Q.responds($)) { if(st || (st = new yi($, U, j, O || Q, K ? j.subtract(K) : null)), Q.emit($, st) && (p = !0, st.prevented && (x = !0), st.stopped)) return rt = !0 } else { var ut = y[$]; if(ut) return Z(Q, ut) } } for(; V && V !== J && !Z(V, R);) V = V._parent; return rt }

                                function N(V, O, R, U, j, K) { return V._project.removeOn(R), x = p = !1, F && D(F, null, R, U, j, K) || O && O !== F && !O.isDescendant(F) && D(O, null, R === "mousedrag" ? "mousemove" : R, U, j, K, F) || D(V, F || O || V, R, U, j, K) } var L = { mousedown: { mousedown: 1, mousedrag: 1, click: 1, doubleclick: 1 }, mouseup: { mouseup: 1, mousedrag: 1, click: 1, doubleclick: 1 }, mousemove: { mousedrag: 1, mousemove: 1, mouseenter: 1, mouseleave: 1 } }; return { _viewEvents: v, _handleMouseEvent: function(V, O, R) { var U = this._itemEvents,
                                            j = U.native[V],
                                            K = V === "mousemove",
                                            J = this._scope.tool,
                                            rt = this;

                                        function st(ft) { return U.virtual[ft] || rt.responds(ft) || J && J.responds(ft) } K && r && st("mousedrag") && (V = "mousedrag"), R || (R = this.getEventPoint(O)); var Z = this.getBounds()
                                            .contains(R),
                                            Q = j && Z && rt._project.hitTest(R, { tolerance: 0, fill: !0, stroke: !0 }),
                                            $ = Q && Q.item || null,
                                            ut = !1,
                                            at = {}; if(at[V.substr(5)] = !0, j && $ !== S && (S && D(S, null, "mouseleave", O, R), $ && D($, null, "mouseenter", O, R), S = $), w ^ Z && (D(this, null, Z ? "mouseenter" : "mouseleave", O, R), _ = Z ? this : null, ut = !0), (Z || at.drag) && !R.equals(c) && (N(this, $, K ? V : "mousemove", O, R, c), ut = !0), w = Z, at.down && Z || at.up && A) { if(N(this, $, V, O, R, A), at.down) { if(I = $ === b && Date.now() - B < 300, C = b = $, !x && $) { for(var pt = $; pt && !pt.responds("mousedrag");) pt = pt._parent;
                                                    pt && (F = $) } A = R } else at.up && (!x && $ === C && (B = Date.now(), N(this, $, I ? "doubleclick" : "click", O, R, A), I = !1), C = F = null);
                                            w = !1, ut = !0 } c = R, ut && J && (p = J._handleMouseEvent(V, O, R, at) || p), O.cancelable !== !1 && (p && !at.move || at.down && st("mouseup")) && O.preventDefault() }, _handleKeyEvent: function(V, O, R, U) { var j = this._scope,
                                            K = j.tool,
                                            J;

                                        function rt(st) { st.responds(V) && (dt = j, st.emit(V, J = J || new Di(V, O, R, U))) } this.isVisible() && (rt(this), K && K.responds(V) && rt(K)) }, _countItemEvent: function(V, O) { var R = this._itemEvents,
                                            U = R.native,
                                            j = R.virtual; for(var K in L) U[K] = (U[K] || 0) + (L[K][V] || 0) * O;
                                        j[V] = (j[V] || 0) + O }, statics: { updateFocus: u, _resetState: function() { r = n = p = w = !1, t = e = _ = A = c = C = S = F = b = B = I = null } } } }),
                            Pi = Rt.extend({ _class: "CanvasView", initialize: function(e, r) { if(!(r instanceof Ot.HTMLCanvasElement)) { var n = ot.read(arguments, 1); if(n.isZero()) throw new Error("Cannot create CanvasView with the provided argument: " + M.slice(arguments, 1));
                                        r = Kt.getCanvas(n) } var s = this._context = r.getContext("2d"); if(s.save(), this._pixelRatio = 1, !/^off|false$/.test(ve.getAttribute(r, "hidpi"))) { var u = Ot.devicePixelRatio || 1,
                                            h = Vt.getPrefixed(s, "backingStorePixelRatio") || 1;
                                        this._pixelRatio = u / h } Rt.call(this, e, r), this._needsUpdate = !0 }, remove: function t() { return this._context.restore(), t.base.call(this) }, _setElementSize: function t(e, r) { var n = this._pixelRatio; if(t.base.call(this, e * n, r * n), n !== 1) { var s = this._element,
                                            u = this._context; if(!ve.hasAttribute(s, "resize")) { var h = s.style;
                                            h.width = e + "px", h.height = r + "px" } u.restore(), u.save(), u.scale(n, n) } }, getContext: function() { return this._context }, getPixelSize: function t(e) { var r = dt.agent,
                                        n; if(r && r.firefox) n = t.base.call(this, e);
                                    else { var s = this._context,
                                            u = s.font;
                                        s.font = e + " serif", n = parseFloat(s.font), s.font = u } return n }, getTextWidth: function(t, e) { var r = this._context,
                                        n = r.font,
                                        s = 0;
                                    r.font = t; for(var u = 0, h = e.length; u < h; u++) s = Math.max(s, r.measureText(e[u])
                                        .width); return r.font = n, s }, update: function() { if(!this._needsUpdate) return !1; var t = this._project,
                                        e = this._context,
                                        r = this._viewSize; return e.clearRect(0, 0, r.width + 1, r.height + 1), t && t.draw(e, this._matrix, this._pixelRatio), this._needsUpdate = !1, !0 } }),
                            Me = M.extend({ _class: "Event", initialize: function(e) { this.event = e, this.type = e && e.type }, prevented: !1, stopped: !1, preventDefault: function() { this.prevented = !0, this.event.preventDefault() }, stopPropagation: function() { this.stopped = !0, this.event.stopPropagation() }, stop: function() { this.stopPropagation(), this.preventDefault() }, getTimeStamp: function() { return this.event.timeStamp }, getModifiers: function() { return Ve.modifiers } }),
                            Di = Me.extend({ _class: "KeyEvent", initialize: function(e, r, n, s) { this.type = e, this.event = r, this.key = n, this.character = s }, toString: function() { return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }" } }),
                            Ve = new function() { var t = { "   ": "tab", " ": "space", "\b": "backspace", "\x7F": "delete", Spacebar: "space", Del: "delete", Win: "meta", Esc: "escape" },
                                    e = { tab: "    ", space: " ", enter: "\r" },
                                    r = {},
                                    n = {},
                                    s, u, h = new M({ shift: !1, control: !1, alt: !1, meta: !1, capsLock: !1, space: !1 })
                                    .inject({ option: { get: function() { return this.alt } }, command: { get: function() { var f = dt && dt.agent; return f && f.mac ? this.meta : this.control } } });

                                function o(f) { var g = f.key || f.keyIdentifier; return g = /^U\+/.test(g) ? String.fromCharCode(parseInt(g.substr(2), 16)) : /^Arrow[A-Z]/.test(g) ? g.substr(5) : g === "Unidentified" || g === tt ? String.fromCharCode(f.keyCode) : g, t[g] || (g.length > 1 ? M.hyphenate(g) : g.toLowerCase()) }

                                function l(f, g, v, d) { var p = f ? "keydown" : "keyup",
                                        x = Rt._focused,
                                        y; if(r[g] = f, f ? n[g] = v : delete n[g], g.length > 1 && (y = M.camelize(g)) in h) { h[y] = f; var w = dt && dt.agent; if(y === "meta" && w && w.mac)
                                            if(f) s = {};
                                            else { for(var _ in s) _ in n && l(!1, _, s[_], d);
                                                s = null } } else f && s && (s[g] = v);
                                    x && x._handleKeyEvent(f ? "keydown" : "keyup", d, g, v) } return Zt.add(kt, { keydown: function(f) { var g = o(f),
                                            v = dt && dt.agent;
                                        g.length > 1 || v && v.chrome && (f.altKey || v.mac && f.metaKey || !v.mac && f.ctrlKey) ? l(!0, g, e[g] || (g.length > 1 ? "" : g), f) : u = g }, keypress: function(f) { if(u) { var g = o(f),
                                                v = f.charCode,
                                                d = v >= 32 ? String.fromCharCode(v) : g.length > 1 ? "" : g;
                                            g !== u && (g = d.toLowerCase()), l(!0, g, d, f), u = null } }, keyup: function(f) { var g = o(f);
                                        g in n && l(!1, g, n[g], f) } }), Zt.add(Ot, { blur: function(f) { for(var g in n) l(!1, g, n[g], f) } }), { modifiers: h, isDown: function(f) { return !!r[f] } } },
                            yi = Me.extend({ _class: "MouseEvent", initialize: function(e, r, n, s, u) { this.type = e, this.event = r, this.point = n, this.target = s, this.delta = u }, toString: function() { return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }" } }),
                            Ci = Me.extend({ _class: "ToolEvent", _item: null, initialize: function(e, r, n) { this.tool = e, this.type = r, this.event = n }, _choosePoint: function(t, e) { return t || (e ? e.clone() : null) }, getPoint: function() { return this._choosePoint(this._point, this.tool._point) }, setPoint: function(t) { this._point = t }, getLastPoint: function() { return this._choosePoint(this._lastPoint, this.tool._lastPoint) }, setLastPoint: function(t) { this._lastPoint = t }, getDownPoint: function() { return this._choosePoint(this._downPoint, this.tool._downPoint) }, setDownPoint: function(t) { this._downPoint = t }, getMiddlePoint: function() { return !this._middlePoint && this.tool._lastPoint ? this.tool._point.add(this.tool._lastPoint)
                                        .divide(2) : this._middlePoint }, setMiddlePoint: function(t) { this._middlePoint = t }, getDelta: function() { return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta }, setDelta: function(t) { this._delta = t }, getCount: function() { return this.tool[/^mouse(down|up)$/.test(this.type) ? "_downCount" : "_moveCount"] }, setCount: function(t) { this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = t }, getItem: function() { if(!this._item) { var t = this.tool._scope.project.hitTest(this.getPoint()); if(t) { for(var e = t.item, r = e._parent;
                                                /^(Group|CompoundPath)$/.test(r._class);) e = r, r = r._parent;
                                            this._item = e } } return this._item }, setItem: function(t) { this._item = t }, toString: function() { return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }" } }),
                            oi = ii.extend({ _class: "Tool", _list: "tools", _reference: "tool", _events: ["onMouseDown", "onMouseUp", "onMouseDrag", "onMouseMove", "onActivate", "onDeactivate", "onEditOptions", "onKeyDown", "onKeyUp"], initialize: function(e) { ii.call(this), this._moveCount = -1, this._downCount = -1, this.set(e) }, getMinDistance: function() { return this._minDistance }, setMinDistance: function(t) { this._minDistance = t, t != null && this._maxDistance != null && t > this._maxDistance && (this._maxDistance = t) }, getMaxDistance: function() { return this._maxDistance }, setMaxDistance: function(t) { this._maxDistance = t, this._minDistance != null && t != null && t < this._minDistance && (this._minDistance = t) }, getFixedDistance: function() { return this._minDistance == this._maxDistance ? this._minDistance : null }, setFixedDistance: function(t) { this._minDistance = this._maxDistance = t }, _handleMouseEvent: function(t, e, r, n) { dt = this._scope, n.drag && !this.responds(t) && (t = "mousemove"); var s = n.move || n.drag,
                                        u = this.responds(t),
                                        h = this.minDistance,
                                        o = this.maxDistance,
                                        l = !1,
                                        f = this;

                                    function g(d, p) { var x = r,
                                            y = s ? f._point : f._downPoint || x; if(s) { if(f._moveCount >= 0 && x.equals(y)) return !1; if(y && (d != null || p != null)) { var w = x.subtract(y),
                                                    _ = w.getLength(); if(_ < (d || 0)) return !1;
                                                p && (x = y.add(w.normalize(Math.min(_, p)))) } f._moveCount++ } return f._point = x, f._lastPoint = y || x, n.down && (f._moveCount = -1, f._downPoint = x, f._downCount++), !0 }

                                    function v() { u && (l = f.emit(t, new Ci(f, t, e)) || l) } if(n.down) g(), v();
                                    else if(n.up) g(null, o), v();
                                    else if(u)
                                        for(; g(h, o);) v(); return l } }),
                            wi = M.extend(Le, { _class: "Tween", statics: { easings: new M({ linear: function(t) { return t }, easeInQuad: function(t) { return t * t }, easeOutQuad: function(t) { return t * (2 - t) }, easeInOutQuad: function(t) { return t < .5 ? 2 * t * t : -1 + 2 * (2 - t) * t }, easeInCubic: function(t) { return t * t * t }, easeOutCubic: function(t) { return --t * t * t + 1 }, easeInOutCubic: function(t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }, easeInQuart: function(t) { return t * t * t * t }, easeOutQuart: function(t) { return 1 - --t * t * t * t }, easeInOutQuart: function(t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t }, easeInQuint: function(t) { return t * t * t * t * t }, easeOutQuint: function(t) { return 1 + --t * t * t * t * t }, easeInOutQuint: function(t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t } }) }, initialize: function t(e, r, n, s, u, h) { this.object = e; var o = typeof u,
                                        l = o === "function";
                                    this.type = l ? o : o === "string" ? u : "linear", this.easing = l ? u : t.easings[this.type], this.duration = s, this.running = !1, this._then = null, this._startTime = null; var f = r || n;
                                    this._keys = f ? Object.keys(f) : [], this._parsedKeys = this._parseKeys(this._keys), this._from = f && this._getState(r), this._to = f && this._getState(n), h !== !1 && this.start() }, then: function(t) { return this._then = t, this }, start: function() { return this._startTime = null, this.running = !0, this }, stop: function() { return this.running = !1, this }, update: function(t) { if(this.running) { t >= 1 && (t = 1, this.running = !1); for(var e = this.easing(t), r = this._keys, n = function(g) { return typeof g == "function" ? g(e, t) : g }, s = 0, u = r && r.length; s < u; s++) { var h = r[s],
                                                o = n(this._from[h]),
                                                l = n(this._to[h]),
                                                f = o && l && o.__add && l.__add ? l.__subtract(o)
                                                .__multiply(e)
                                                .__add(o) : (l - o) * e + o;
                                            this._setProperty(this._parsedKeys[h], f) } this.responds("update") && this.emit("update", new M({ progress: t, factor: e })), !this.running && this._then && this._then(this.object) } return this }, _events: { onUpdate: {} }, _handleFrame: function(t) { var e = this._startTime,
                                        r = e ? (t - e) / this.duration : 0;
                                    e || (this._startTime = t), this.update(r) }, _getState: function(t) { for(var e = this._keys, r = {}, n = 0, s = e.length; n < s; n++) { var u = e[n],
                                            h = this._parsedKeys[u],
                                            o = this._getProperty(h),
                                            l; if(t) { var f = this._resolveValue(o, t[u]);
                                            this._setProperty(h, f), l = this._getProperty(h), l = l && l.clone ? l.clone() : l, this._setProperty(h, o) } else l = o && o.clone ? o.clone() : o;
                                        r[u] = l } return r }, _resolveValue: function(t, e) { if(e) { if(Array.isArray(e) && e.length === 2) { var r = e[0]; return r && r.match && r.match(/^[+\-\*\/]=/) ? this._calculate(t, r[0], e[1]) : e } else if(typeof e == "string") { var n = e.match(/^[+\-*/]=(.*)/); if(n) { var s = JSON.parse(n[1].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ')); return this._calculate(t, e[0], s) } } } return e }, _calculate: function(t, e, r) { return dt.PaperScript.calculateBinary(t, e, r) }, _parseKeys: function(t) { for(var e = {}, r = 0, n = t.length; r < n; r++) { var s = t[r],
                                            u = s.replace(/\.([^.]*)/g, "/$1")
                                            .replace(/\[['"]?([^'"\]]*)['"]?\]/g, "/$1");
                                        e[s] = u.split("/") } return e }, _getProperty: function(t, e) { for(var r = this.object, n = 0, s = t.length - (e || 0); n < s && r; n++) r = r[t[n]]; return r }, _setProperty: function(t, e) { var r = this._getProperty(t, 1);
                                    r && (r[t[t.length - 1]] = e) } }),
                            we = { request: function(t) { var e = new Ht.XMLHttpRequest; return e.open((t.method || "get")
                                        .toUpperCase(), t.url, M.pick(t.async, !0)), t.mimeType && e.overrideMimeType(t.mimeType), e.onload = function() { var r = e.status;
                                        r === 0 || r === 200 ? t.onLoad && t.onLoad.call(e, e.responseText) : e.onerror() }, e.onerror = function() { var r = e.status,
                                            n = 'Could not load "' + t.url + '" (Status: ' + r + ")"; if(t.onError) t.onError(n, r);
                                        else throw new Error(n) }, e.send(null) } },
                            Kt = M.exports.CanvasProvider = { canvases: [], getCanvas: function(t, e, r) { if(!Ot) return null; var n, s = !0;
                                    typeof t == "object" && (e = t.height, t = t.width), this.canvases.length ? n = this.canvases.pop() : (n = kt.createElement("canvas"), s = !1); var u = n.getContext("2d", r || {}); if(!u) throw new Error("Canvas " + n + " is unable to provide a 2D context."); return n.width === t && n.height === e ? s && u.clearRect(0, 0, t + 1, e + 1) : (n.width = t, n.height = e), u.save(), n }, getContext: function(t, e, r) { var n = this.getCanvas(t, e, r); return n ? n.getContext("2d", r || {}) : null }, release: function(t) { var e = t && t.canvas ? t.canvas : t;
                                    e && e.getContext && (e.getContext("2d")
                                        .restore(), this.canvases.push(e)) } },
                            hi = new function() { var t = Math.min,
                                    e = Math.max,
                                    r = Math.abs,
                                    n, s, u, h, o, l, f, g, v, d, p;

                                function x(S, F, b) { return .2989 * S + .587 * F + .114 * b }

                                function y(S, F, b, D) { var I = D - x(S, F, b);
                                    v = S + I, d = F + I, p = b + I; var D = x(v, d, p),
                                        N = t(v, d, p),
                                        L = e(v, d, p); if(N < 0) { var V = D - N;
                                        v = D + (v - D) * D / V, d = D + (d - D) * D / V, p = D + (p - D) * D / V } if(L > 255) { var O = 255 - D,
                                            R = L - D;
                                        v = D + (v - D) * O / R, d = D + (d - D) * O / R, p = D + (p - D) * O / R } }

                                function w(S, F, b) { return e(S, F, b) - t(S, F, b) }

                                function _(S, F, b, B) { var I = [S, F, b],
                                        D = e(S, F, b),
                                        N = t(S, F, b),
                                        L;
                                    N = N === S ? 0 : N === F ? 1 : 2, D = D === S ? 0 : D === F ? 1 : 2, L = t(N, D) === 0 ? e(N, D) === 1 ? 2 : 1 : 0, I[D] > I[N] ? (I[L] = (I[L] - I[N]) * B / (I[D] - I[N]), I[D] = B) : I[L] = I[D] = 0, I[N] = 0, v = I[0], d = I[1], p = I[2] } var A = { multiply: function() { v = o * n / 255, d = l * s / 255, p = f * u / 255 }, screen: function() { v = o + n - o * n / 255, d = l + s - l * s / 255, p = f + u - f * u / 255 }, overlay: function() { v = o < 128 ? 2 * o * n / 255 : 255 - 2 * (255 - o) * (255 - n) / 255, d = l < 128 ? 2 * l * s / 255 : 255 - 2 * (255 - l) * (255 - s) / 255, p = f < 128 ? 2 * f * u / 255 : 255 - 2 * (255 - f) * (255 - u) / 255 }, "soft-light": function() { var S = n * o / 255;
                                            v = S + o * (255 - (255 - o) * (255 - n) / 255 - S) / 255, S = s * l / 255, d = S + l * (255 - (255 - l) * (255 - s) / 255 - S) / 255, S = u * f / 255, p = S + f * (255 - (255 - f) * (255 - u) / 255 - S) / 255 }, "hard-light": function() { v = n < 128 ? 2 * n * o / 255 : 255 - 2 * (255 - n) * (255 - o) / 255, d = s < 128 ? 2 * s * l / 255 : 255 - 2 * (255 - s) * (255 - l) / 255, p = u < 128 ? 2 * u * f / 255 : 255 - 2 * (255 - u) * (255 - f) / 255 }, "color-dodge": function() { v = o === 0 ? 0 : n === 255 ? 255 : t(255, 255 * o / (255 - n)), d = l === 0 ? 0 : s === 255 ? 255 : t(255, 255 * l / (255 - s)), p = f === 0 ? 0 : u === 255 ? 255 : t(255, 255 * f / (255 - u)) }, "color-burn": function() { v = o === 255 ? 255 : n === 0 ? 0 : e(0, 255 - (255 - o) * 255 / n), d = l === 255 ? 255 : s === 0 ? 0 : e(0, 255 - (255 - l) * 255 / s), p = f === 255 ? 255 : u === 0 ? 0 : e(0, 255 - (255 - f) * 255 / u) }, darken: function() { v = o < n ? o : n, d = l < s ? l : s, p = f < u ? f : u }, lighten: function() { v = o > n ? o : n, d = l > s ? l : s, p = f > u ? f : u }, difference: function() { v = o - n, v < 0 && (v = -v), d = l - s, d < 0 && (d = -d), p = f - u, p < 0 && (p = -p) }, exclusion: function() { v = o + n * (255 - o - o) / 255, d = l + s * (255 - l - l) / 255, p = f + u * (255 - f - f) / 255 }, hue: function() { _(n, s, u, w(o, l, f)), y(v, d, p, x(o, l, f)) }, saturation: function() { _(o, l, f, w(n, s, u)), y(v, d, p, x(o, l, f)) }, luminosity: function() { y(o, l, f, x(n, s, u)) }, color: function() { y(n, s, u, x(o, l, f)) }, add: function() { v = t(o + n, 255), d = t(l + s, 255), p = t(f + u, 255) }, subtract: function() { v = e(o - n, 0), d = e(l - s, 0), p = e(f - u, 0) }, average: function() { v = (o + n) / 2, d = (l + s) / 2, p = (f + u) / 2 }, negation: function() { v = 255 - r(255 - n - o), d = 255 - r(255 - s - l), p = 255 - r(255 - u - f) } },
                                    c = this.nativeModes = M.each(["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "darker", "copy", "xor"], function(S) { this[S] = !0 }, {}),
                                    C = Kt.getContext(1, 1, { willReadFrequently: !0 });
                                C && (M.each(A, function(S, F) { var b = F === "darken",
                                        B = !1;
                                    C.save(); try { C.fillStyle = b ? "#300" : "#a00", C.fillRect(0, 0, 1, 1), C.globalCompositeOperation = F, C.globalCompositeOperation === F && (C.fillStyle = b ? "#a00" : "#300", C.fillRect(0, 0, 1, 1), B = C.getImageData(0, 0, 1, 1)
                                            .data[0] !== b ? 170 : 51) } catch {} C.restore(), c[F] = B }), Kt.release(C)), this.process = function(S, F, b, B, I) { var D = F.canvas,
                                        N = S === "normal"; if(N || c[S]) b.save(), b.setTransform(1, 0, 0, 1, 0, 0), b.globalAlpha = B, N || (b.globalCompositeOperation = S), b.drawImage(D, I.x, I.y), b.restore();
                                    else { var L = A[S]; if(!L) return; for(var V = b.getImageData(I.x, I.y, D.width, D.height), O = V.data, R = F.getImageData(0, 0, D.width, D.height)
                                                .data, U = 0, j = O.length; U < j; U += 4) { n = R[U], o = O[U], s = R[U + 1], l = O[U + 1], u = R[U + 2], f = O[U + 2], h = R[U + 3], g = O[U + 3], L(); var K = h * B / 255,
                                                J = 1 - K;
                                            O[U] = K * v + J * o, O[U + 1] = K * d + J * l, O[U + 2] = K * p + J * f, O[U + 3] = h * B + J * g } b.putImageData(V, I.x, I.y) } } },
                            Ut = new function() { var t = "http://www.w3.org/2000/svg",
                                    e = "http://www.w3.org/2000/xmlns",
                                    r = "http://www.w3.org/1999/xlink",
                                    n = { href: r, xlink: e, xmlns: e + "/", "xmlns:xlink": e + "/" };

                                function s(o, l, f) { return h(kt.createElementNS(t, o), l, f) }

                                function u(o, l) { var f = n[l],
                                        g = f ? o.getAttributeNS(f, l) : o.getAttribute(l); return g === "null" ? null : g }

                                function h(o, l, f) { for(var g in l) { var v = l[g],
                                            d = n[g];
                                        typeof v == "number" && f && (v = f.number(v)), d ? o.setAttributeNS(d, g, v) : o.setAttribute(g, v) } return o } return { svg: t, xmlns: e, xlink: r, create: s, get: u, set: h } },
                            zt = M.each({ fillColor: ["fill", "color"], fillRule: ["fill-rule", "string"], strokeColor: ["stroke", "color"], strokeWidth: ["stroke-width", "number"], strokeCap: ["stroke-linecap", "string"], strokeJoin: ["stroke-linejoin", "string"], strokeScaling: ["vector-effect", "lookup", { true: "none", false: "non-scaling-stroke" }, function(t, e) { return !e && (t instanceof ge || t instanceof ue || t instanceof Ie) }], miterLimit: ["stroke-miterlimit", "number"], dashArray: ["stroke-dasharray", "array"], dashOffset: ["stroke-dashoffset", "number"], fontFamily: ["font-family", "string"], fontWeight: ["font-weight", "string"], fontSize: ["font-size", "number"], justification: ["text-anchor", "lookup", { left: "start", center: "middle", right: "end" }], opacity: ["opacity", "number"], blendMode: ["mix-blend-mode", "style"] }, function(t, e) { var r = M.capitalize(e),
                                    n = t[2];
                                this[e] = { type: t[1], property: e, attribute: t[0], toSVG: n, fromSVG: n && M.each(n, function(s, u) { this[s] = u }, {}), exportFilter: t[3], get: "get" + r, set: "set" + r } }, {});
                        new function() { var t;

                            function e(A, c, C) { var S = new M,
                                    F = A.getTranslation(); if(c) { var b;
                                    A.isInvertible() ? (A = A._shiftless(), b = A._inverseTransform(F), F = null) : b = new q, S[C ? "cx" : "x"] = b.x, S[C ? "cy" : "y"] = b.y } if(!A.isIdentity()) { var B = A.decompose(); if(B) { var I = [],
                                            D = B.rotation,
                                            N = B.scaling,
                                            L = B.skewing;
                                        F && !F.isZero() && I.push("translate(" + t.point(F) + ")"), D && I.push("rotate(" + t.number(D) + ")"), (!Ft.isZero(N.x - 1) || !Ft.isZero(N.y - 1)) && I.push("scale(" + t.point(N) + ")"), L.x && I.push("skewX(" + t.number(L.x) + ")"), L.y && I.push("skewY(" + t.number(L.y) + ")"), S.transform = I.join(" ") } else S.transform = "matrix(" + A.getValues()
                                        .join(",") + ")" } return S }

                            function r(A, c) { for(var C = e(A._matrix), S = A._children, F = Ut.create("g", C, t), b = 0, B = S.length; b < B; b++) { var I = S[b],
                                        D = w(I, c); if(D)
                                        if(I.isClipMask()) { var N = Ut.create("clipPath");
                                            N.appendChild(D), x(I, N, "clip"), Ut.set(F, { "clip-path": "url(#" + N.id + ")" }) } else F.appendChild(D) } return F }

                            function n(A, c) { var C = e(A._matrix, !0),
                                    S = A.getSize(),
                                    F = A.getImage(); return C.x -= S.width / 2, C.y -= S.height / 2, C.width = S.width, C.height = S.height, C.href = c.embedImages == !1 && F && F.src || A.toDataURL(), Ut.create("image", C, t) }

                            function s(A, c) { var C = c.matchShapes; if(C) { var S = A.toShape(!1); if(S) return u(S, c) } var F = A._segments,
                                    b = F.length,
                                    B, I = e(A._matrix); if(C && b >= 2 && !A.hasHandles())
                                    if(b > 2) { B = A._closed ? "polygon" : "polyline"; for(var D = [], N = 0; N < b; N++) D.push(t.point(F[N]._point));
                                        I.points = D.join(" ") } else { B = "line"; var L = F[0]._point,
                                            V = F[1]._point;
                                        I.set({ x1: L.x, y1: L.y, x2: V.x, y2: V.y }) } else B = "path", I.d = A.getPathData(null, c.precision); return Ut.create(B, I, t) }

                            function u(A) { var c = A._type,
                                    C = A._radius,
                                    S = e(A._matrix, !0, c !== "rectangle"); if(c === "rectangle") { c = "rect"; var F = A._size,
                                        b = F.width,
                                        B = F.height;
                                    S.x -= b / 2, S.y -= B / 2, S.width = b, S.height = B, C.isZero() && (C = null) } return C && (c === "circle" ? S.r = C : (S.rx = C.width, S.ry = C.height)), Ut.create(c, S, t) }

                            function h(A, c) { var C = e(A._matrix),
                                    S = A.getPathData(null, c.precision); return S && (C.d = S), Ut.create("path", C, t) }

                            function o(A, c) { var C = e(A._matrix, !0),
                                    S = A._definition,
                                    F = p(S, "symbol"),
                                    b = S._item,
                                    B = b.getStrokeBounds(); return F || (F = Ut.create("symbol", { viewBox: t.rectangle(B) }), F.appendChild(w(b, c)), x(S, F, "symbol")), C.href = "#" + F.id, C.x += B.x, C.y += B.y, C.width = B.width, C.height = B.height, C.overflow = "visible", Ut.create("use", C, t) }

                            function l(A) { var c = p(A, "color"); if(!c) { var C = A.getGradient(),
                                        S = C._radial,
                                        F = A.getOrigin(),
                                        b = A.getDestination(),
                                        B; if(S) { B = { cx: F.x, cy: F.y, r: F.getDistance(b) }; var I = A.getHighlight();
                                        I && (B.fx = I.x, B.fy = I.y) } else B = { x1: F.x, y1: F.y, x2: b.x, y2: b.y };
                                    B.gradientUnits = "userSpaceOnUse", c = Ut.create((S ? "radial" : "linear") + "Gradient", B, t); for(var D = C._stops, N = 0, L = D.length; N < L; N++) { var V = D[N],
                                            O = V._color,
                                            R = O.getAlpha(),
                                            U = V._offset;
                                        B = { offset: U ? ? N / (L - 1) }, O && (B["stop-color"] = O.toCSS(!0)), R < 1 && (B["stop-opacity"] = R), c.appendChild(Ut.create("stop", B, t)) } x(A, c, "color") } return "url(#" + c.id + ")" }

                            function f(A) { var c = Ut.create("text", e(A._matrix, !0), t); return c.textContent = A._content, c } var g = { Group: r, Layer: r, Raster: n, Path: s, Shape: u, CompoundPath: h, SymbolItem: o, PointText: f };

                            function v(A, c, C) { var S = {},
                                    F = !C && A.getParent(),
                                    b = []; return A._name != null && (S.id = A._name), M.each(zt, function(B) { var I = B.get,
                                        D = B.type,
                                        N = A[I](); if(B.exportFilter ? B.exportFilter(A, N) : !F || !M.equals(F[I](), N)) { if(D === "color" && N != null) { var L = N.getAlpha();
                                            L < 1 && (S[B.attribute + "-opacity"] = L) } D === "style" ? b.push(B.attribute + ": " + N) : S[B.attribute] = N == null ? "none" : D === "color" ? N.gradient ? l(N, A) : N.toCSS(!0) : D === "array" ? N.join(",") : D === "lookup" ? B.toSVG[N] : N } }), b.length && (S.style = b.join(";")), S.opacity === 1 && delete S.opacity, A._visible || (S.visibility = "hidden"), Ut.set(c, S, t) } var d;

                            function p(A, c) { return d || (d = { ids: {}, svgs: {} }), A && d.svgs[c + "-" + (A._id || A.__id || (A.__id = de.get("svg")))] }

                            function x(A, c, C) { d || p(); var S = d.ids[C] = (d.ids[C] || 0) + 1;
                                c.id = C + "-" + S, d.svgs[C + "-" + (A._id || A.__id)] = c }

                            function y(A, c) { var C = A,
                                    S = null; if(d) { C = A.nodeName.toLowerCase() === "svg" && A; for(var F in d.svgs) S || (C || (C = Ut.create("svg"), C.appendChild(A)), S = C.insertBefore(Ut.create("defs"), C.firstChild)), S.appendChild(d.svgs[F]);
                                    d = null } return c.asString ? new Ht.XMLSerializer()
                                    .serializeToString(C) : C }

                            function w(A, c, C) { var S = g[A._class],
                                    F = S && S(A, c); if(F) { var b = c.onExport;
                                    b && (F = b(A, F, c) || F); var B = JSON.stringify(A._data);
                                    B && B !== "{}" && B !== "null" && F.setAttribute("data-paper-data", B) } return F && v(A, F, C) }

                            function _(A) { return A || (A = {}), t = new me(A.precision), A } Ct.inject({ exportSVG: function(A) { return A = _(A), y(w(this, A, !0), A) } }), ie.inject({ exportSVG: function(A) { A = _(A); var c = this._children,
                                        C = this.getView(),
                                        S = M.pick(A.bounds, "view"),
                                        F = A.matrix || S === "view" && C._matrix,
                                        b = F && lt.read([F]),
                                        B = S === "view" ? new ht([0, 0], C.getViewSize()) : S === "content" ? Ct._getBounds(c, b, { stroke: !0 })
                                        .rect : ht.read([S], 0, { readNull: !0 }),
                                        I = { version: "1.1", xmlns: Ut.svg, "xmlns:xlink": Ut.xlink };
                                    B && (I.width = B.width, I.height = B.height, (B.x || B.x === 0 || B.y || B.y === 0) && (I.viewBox = t.rectangle(B))); var D = Ut.create("svg", I, t),
                                        N = D;
                                    b && !b.isIdentity() && (N = D.appendChild(Ut.create("g", e(b), t))); for(var L = 0, V = c.length; L < V; L++) N.appendChild(w(c[L], A, !0)); return y(D, A) } }) }, new function() { var t = {},
                                e;

                            function r(c, C, S, F, b, B) { var I = Ut.get(c, C) || B,
                                    D = I == null ? F ? null : S ? "" : 0 : S ? I : parseFloat(I); return /%\s*$/.test(I) ? D / 100 * (b ? 1 : e[/x|^width/.test(C) ? "width" : "height"]) : D }

                            function n(c, C, S, F, b, B, I) { return C = r(c, C || "x", !1, F, b, B), S = r(c, S || "y", !1, F, b, I), F && (C == null || S == null) ? null : new q(C, S) }

                            function s(c, C, S, F, b) { return C = r(c, C || "width", !1, F, b), S = r(c, S || "height", !1, F, b), F && (C == null || S == null) ? null : new ot(C, S) }

                            function u(c, C, S) { return c === "none" ? null : C === "number" ? parseFloat(c) : C === "array" ? c ? c.split(/[\s,]+/g)
                                    .map(parseFloat) : [] : C === "color" ? w(c) || c : C === "lookup" ? S[c] : c }

                            function h(c, C, S, F) { var b = c.childNodes,
                                    B = C === "clippath",
                                    I = C === "defs",
                                    D = new ae,
                                    N = D._project,
                                    L = N._currentStyle,
                                    V = []; if(!B && !I && (D = y(D, c, F), N._currentStyle = D._style.clone()), F)
                                    for(var O = c.querySelectorAll("defs"), R = 0, U = O.length; R < U; R++) _(O[R], S, !1); for(var R = 0, U = b.length; R < U; R++) { var j = b[R],
                                        K;
                                    j.nodeType === 1 && !/^defs$/i.test(j.nodeName) && (K = _(j, S, !1)) && !(K instanceof Se) && V.push(K) } return D.addChildren(V), B && (D = y(D.reduce(), c, F)), N._currentStyle = L, (B || I) && (D.remove(), D = null), D }

                            function o(c, C) { for(var S = c.getAttribute("points")
                                        .match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g), F = [], b = 0, B = S.length; b < B; b += 2) F.push(new q(parseFloat(S[b]), parseFloat(S[b + 1]))); var I = new Bt(F); return C === "polygon" && I.closePath(), I }

                            function l(c) { return ge.create(c.getAttribute("d")) }

                            function f(c, C) { var S = (r(c, "href", !0) || "")
                                    .substring(1),
                                    F = C === "radialgradient",
                                    b; if(S) b = t[S].getGradient(), b._radial ^ F && (b = b.clone(), b._radial = F);
                                else { for(var B = c.childNodes, I = [], D = 0, N = B.length; D < N; D++) { var L = B[D];
                                        L.nodeType === 1 && I.push(y(new Pe, L)) } b = new ui(I, F) } var V, O, R, U = r(c, "gradientUnits", !0) !== "userSpaceOnUse";
                                F ? (V = n(c, "cx", "cy", !1, U, "50%", "50%"), O = V.add(r(c, "r", !1, !1, U, "50%"), 0), R = n(c, "fx", "fy", !0, U)) : (V = n(c, "x1", "y1", !1, U, "0%", "0%"), O = n(c, "x2", "y2", !1, U, "100%", "0%")); var j = y(new Yt(b, V, O, R), c); return j._scaleToBounds = U, null } var g = { "#document": function(c, C, S, F) { for(var b = c.childNodes, B = 0, I = b.length; B < I; B++) { var D = b[B]; if(D.nodeType === 1) return _(D, S, F) } }, g: h, svg: h, clippath: h, polygon: o, polyline: o, path: l, lineargradient: f, radialgradient: f, image: function(c) { var C = new re(r(c, "href", !0)); return C.on("load", function() { var S = s(c);
                                        this.setSize(S); var F = n(c)
                                            .add(S.divide(2));
                                        this._matrix.append(new lt()
                                            .translate(F)) }), C }, symbol: function(c, C, S, F) { return new Se(h(c, C, S, F), !0) }, defs: h, use: function(c) { var C = (r(c, "href", !0) || "")
                                        .substring(1),
                                        S = t[C],
                                        F = n(c); return S ? S instanceof Se ? S.place(F) : S.clone()
                                        .translate(F) : null }, circle: function(c) { return new ue.Circle(n(c, "cx", "cy"), r(c, "r")) }, ellipse: function(c) { return new ue.Ellipse({ center: n(c, "cx", "cy"), radius: s(c, "rx", "ry") }) }, rect: function(c) { return new ue.Rectangle(new ht(n(c), s(c)), s(c, "rx", "ry")) }, line: function(c) { return new Bt.Line(n(c, "x1", "y1"), n(c, "x2", "y2")) }, text: function(c) { var C = new Ii(n(c)
                                        .add(n(c, "dx", "dy"))); return C.setContent(c.textContent.trim() || ""), C }, switch: h };

                            function v(c, C, S, F) { if(c.transform) { for(var b = (F.getAttribute(S) || "")
                                            .split(/\)\s*/g), B = new lt, I = 0, D = b.length; I < D; I++) { var N = b[I]; if(!N) break; for(var L = N.split(/\(\s*/), V = L[0], O = L[1].split(/[\s,]+/g), R = 0, U = O.length; R < U; R++) O[R] = parseFloat(O[R]); switch (V) {
                                            case "matrix":
                                                B.append(new lt(O[0], O[1], O[2], O[3], O[4], O[5])); break;
                                            case "rotate":
                                                B.rotate(O[0], O[1] || 0, O[2] || 0); break;
                                            case "translate":
                                                B.translate(O[0], O[1] || 0); break;
                                            case "scale":
                                                B.scale(O); break;
                                            case "skewX":
                                                B.skew(O[0], 0); break;
                                            case "skewY":
                                                B.skew(0, O[0]); break } } c.transform(B) } }

                            function d(c, C, S) { var F = S === "fill-opacity" ? "getFillColor" : "getStrokeColor",
                                    b = c[F] && c[F]();
                                b && b.setAlpha(parseFloat(C)) } var p = M.set(M.each(zt, function(c) { this[c.attribute] = function(C, S) { if(C[c.set] && (C[c.set](u(S, c.type, c.fromSVG)), c.type === "color")) { var F = C[c.get](); if(F && F._scaleToBounds) { var b = C.getBounds();
                                            F.transform(new lt()
                                                .translate(b.getPoint())
                                                .scale(b.getSize())) } } } }, {}), { id: function(c, C) { t[C] = c, c.setName && c.setName(C) }, "clip-path": function(c, C) { var S = w(C); if(S)
                                        if(S = S.clone(), S.setClipMask(!0), c instanceof ae) c.insertChild(0, S);
                                        else return new ae(S, c) }, gradientTransform: v, transform: v, "fill-opacity": d, "stroke-opacity": d, visibility: function(c, C) { c.setVisible && c.setVisible(C === "visible") }, display: function(c, C) { c.setVisible && c.setVisible(C !== null) }, "stop-color": function(c, C) { c.setColor && c.setColor(C) }, "stop-opacity": function(c, C) { c._color && c._color.setAlpha(parseFloat(C)) }, offset: function(c, C) { if(c.setOffset) { var S = C.match(/(.*)%$/);
                                        c.setOffset(S ? S[1] / 100 : parseFloat(C)) } }, viewBox: function(c, C, S, F, b) { var B = new ht(u(C, "array")),
                                        I = s(F, null, null, !0),
                                        D, N; if(c instanceof ae) { var L = I ? I.divide(B.getSize()) : 1,
                                            N = new lt()
                                            .scale(L)
                                            .translate(B.getPoint()
                                                .negate());
                                        D = c } else c instanceof Se && (I && B.setSize(I), D = c._item); if(D) { if(x(F, "overflow", b) !== "visible") { var V = new ue.Rectangle(B);
                                            V.setClipMask(!0), D.addChild(V) } N && D.transform(N) } } });

                            function x(c, C, S) { var F = c.attributes[C],
                                    b = F && F.value; if(!b && c.style) { var B = M.camelize(C);
                                    b = c.style[B], !b && S.node[B] !== S.parent[B] && (b = S.node[B]) } return b ? b === "none" ? null : b : tt }

                            function y(c, C, S) { var F = C.parentNode,
                                    b = { node: Vt.getStyles(C) || {}, parent: !S && !/^defs$/i.test(F.tagName) && Vt.getStyles(F) || {} }; return M.each(p, function(B, I) { var D = x(C, I, b);
                                    c = D !== tt && B(c, D, I, C, b) || c }), c }

                            function w(c) { var C = c && c.match(/\((?:["'#]*)([^"')]+)/),
                                    S = C && C[1],
                                    F = S && t[Ot ? S.replace(Ot.location.href.split("#")[0] + "#", "") : S]; return F && F._scaleToBounds && (F = F.clone(), F._scaleToBounds = !0), F }

                            function _(c, C, S) { var F = c.nodeName.toLowerCase(),
                                    b = F !== "#document",
                                    B = kt.body,
                                    I, D, N;
                                S && b && (e = dt.getView()
                                    .getSize(), e = s(c, null, null, !0) || e, I = Ut.create("svg", { style: "stroke-width: 1px; stroke-miterlimit: 10" }), D = c.parentNode, N = c.nextSibling, I.appendChild(c), B.appendChild(I)); var L = dt.settings,
                                    V = L.applyMatrix,
                                    O = L.insertItems;
                                L.applyMatrix = !1, L.insertItems = !1; var R = g[F],
                                    U = R && R(c, F, C, S) || null; if(L.insertItems = O, L.applyMatrix = V, U) { b && !(U instanceof ae) && (U = y(U, c, S)); var j = C.onImport,
                                        K = b && c.getAttribute("data-paper-data");
                                    j && (U = j(c, U, C) || U), C.expandShapes && U instanceof ue && (U.remove(), U = U.toPath()), K && (U._data = JSON.parse(K)) } return I && (B.removeChild(I), D && (N ? D.insertBefore(c, N) : D.appendChild(c))), S && (t = {}, U && M.pick(C.applyMatrix, V) && U.matrix.apply(!0, !0)), U }

                            function A(c, C, S) { if(!c) return null;
                                C = typeof C == "function" ? { onLoad: C } : C || {}; var F = dt,
                                    b = null;

                                function B(L) { try { var V = typeof L == "object" ? L : new Ht.DOMParser()
                                            .parseFromString(L.trim(), "image/svg+xml"); if(!V.nodeName) throw V = null, new Error("Unsupported SVG source: " + c);
                                        dt = F, b = _(V, C, !0), (!C || C.insert !== !1) && S._insertItem(tt, b); var O = C.onLoad;
                                        O && O(b, L) } catch (R) { I(R) } }

                                function I(L, V) { var O = C.onError; if(O) O(L, V);
                                    else throw new Error(L) } if(typeof c == "string" && !/^[\s\S]*</.test(c)) { var D = kt.getElementById(c);
                                    D ? B(D) : we.request({ url: c, async: !0, onLoad: B, onError: I }) } else if(typeof File < "u" && c instanceof File) { var N = new FileReader; return N.onload = function() { B(N.result) }, N.onerror = function() { I(N.error) }, N.readAsText(c) } else B(c); return b } Ct.inject({ importSVG: function(c, C) { return A(c, C, this) } }), ie.inject({ importSVG: function(c, C) { return this.activate(), A(c, C, this) } }) }, M.exports.PaperScript = function() { var t = this,
                                e = t.acorn; if(!e && typeof mr < "u") try { e = xr() } catch {}
                            if(!e) { var r, n;
                                e = r = n = {},
                                    function(y, w) { if(typeof r == "object" && typeof n == "object") return w(r); if(typeof define == "function" && define.amd) return define(["exports"], w);
                                        w(y.acorn || (y.acorn = {})) }(this, function(y) { "use strict";
                                        y.version = "0.5.0"; var w, _, A, c;
                                        y.parse = function(T, z) { return _ = String(T), A = _.length, S(z), ar(), Xr(w.program) }; var C = y.defaultOptions = { ecmaVersion: 5, strictSemicolons: !1, allowTrailingCommas: !0, forbidReserved: !1, allowReturnOutsideFunction: !1, locations: !1, onComment: null, ranges: !1, program: null, sourceFile: null, directSourceFile: null };

                                        function S(T) { w = T || {}; for(var z in C) Object.prototype.hasOwnProperty.call(w, z) || (w[z] = C[z]);
                                            c = w.sourceFile || null } var F = y.getLineInfo = function(T, z) { for(var W = 1, X = 0;;) { pi.lastIndex = X; var gt = pi.exec(T); if(gt && gt.index < z) ++W, X = gt.index + gt[0].length;
                                                else break } return { line: W, column: z - X } };
                                        y.tokenize = function(T, z) { _ = String(T), A = _.length, S(z), ar(); var W = {};

                                            function X(gt) { return K = I, Ye(gt), W.start = B, W.end = I, W.startLoc = D, W.endLoc = N, W.type = L, W.value = V, W } return X.jumpTo = function(gt, mt) { if(b = gt, w.locations) { R = 1, U = pi.lastIndex = 0; for(var yt;
                                                        (yt = pi.exec(_)) && yt.index < gt;) ++R, U = yt.index + yt[0].length } O = mt, di() }, X }; var b, B, I, D, N, L, V, O, R, U, j, K, J, rt, st, Z;

                                        function Q(T, z) { var W = F(_, T);
                                            z += " (" + W.line + ":" + W.column + ")"; var X = new SyntaxError(z); throw X.pos = T, X.loc = W, X.raisedAt = b, X } var $ = [],
                                            ut = { type: "num" },
                                            at = { type: "regexp" },
                                            pt = { type: "string" },
                                            ft = { type: "name" },
                                            _t = { type: "eof" },
                                            wt = { keyword: "break" },
                                            Y = { keyword: "case", beforeExpr: !0 },
                                            Tt = { keyword: "catch" },
                                            Xt = { keyword: "continue" },
                                            te = { keyword: "debugger" },
                                            jt = { keyword: "default" },
                                            Pt = { keyword: "do", isLoop: !0 },
                                            Gt = { keyword: "else", beforeExpr: !0 },
                                            he = { keyword: "finally" },
                                            Lt = { keyword: "for", isLoop: !0 },
                                            qt = { keyword: "function" },
                                            Fe = { keyword: "if" },
                                            ye = { keyword: "return", beforeExpr: !0 },
                                            Ce = { keyword: "switch" },
                                            fe = { keyword: "throw", beforeExpr: !0 },
                                            _e = { keyword: "try" },
                                            ke = { keyword: "var" },
                                            ce = { keyword: "while", isLoop: !0 },
                                            We = { keyword: "with" },
                                            xi = { keyword: "new", beforeExpr: !0 },
                                            Ai = { keyword: "this" },
                                            Ze = { keyword: "null", atomValue: null },
                                            bt = { keyword: "true", atomValue: !0 },
                                            Ti = { keyword: "false", atomValue: !1 },
                                            Ke = { keyword: "in", binop: 7, beforeExpr: !0 },
                                            li = { break: wt, case: Y, catch: Tt, continue: Xt, debugger: te, default: jt, do: Pt, else: Gt, finally: he, for: Lt, function: qt, if: Fe, return: ye, switch: Ce, throw: fe, try: _e, var: ke, while: ce, with: We, null: Ze, true: bt, false: Ti, new: xi, in: Ke, instanceof: { keyword: "instanceof", binop: 7, beforeExpr: !0 }, this: Ai, typeof: { keyword: "typeof", prefix: !0, beforeExpr: !0 }, void: { keyword: "void", prefix: !0, beforeExpr: !0 }, delete: { keyword: "delete", prefix: !0, beforeExpr: !0 } },
                                            Xe = { type: "[", beforeExpr: !0 },
                                            fi = { type: "]" },
                                            Re = { type: "{", beforeExpr: !0 },
                                            De = { type: "}" },
                                            i = { type: "(", beforeExpr: !0 },
                                            a = { type: ")" },
                                            m = { type: ",", beforeExpr: !0 },
                                            E = { type: ";", beforeExpr: !0 },
                                            P = { type: ":", beforeExpr: !0 },
                                            H = { type: "." },
                                            G = { type: "?", beforeExpr: !0 },
                                            et = { binop: 10, beforeExpr: !0 },
                                            nt = { isAssign: !0, beforeExpr: !0 },
                                            vt = { isAssign: !0, beforeExpr: !0 },
                                            St = { postfix: !0, prefix: !0, isUpdate: !0 },
                                            Qt = { prefix: !0, beforeExpr: !0 },
                                            Be = { binop: 1, beforeExpr: !0 },
                                            ze = { binop: 2, beforeExpr: !0 },
                                            qe = { binop: 3, beforeExpr: !0 },
                                            ci = { binop: 4, beforeExpr: !0 },
                                            Ue = { binop: 5, beforeExpr: !0 },
                                            He = { binop: 6, beforeExpr: !0 },
                                            Fr = { binop: 7, beforeExpr: !0 },
                                            kr = { binop: 8, beforeExpr: !0 },
                                            Br = { binop: 9, prefix: !0, beforeExpr: !0 },
                                            Ir = { binop: 10, beforeExpr: !0 };
                                        y.tokTypes = { bracketL: Xe, bracketR: fi, braceL: Re, braceR: De, parenL: i, parenR: a, comma: m, semi: E, colon: P, dot: H, question: G, slash: et, eq: nt, name: ft, eof: _t, num: ut, regexp: at, string: pt }; for(var er in li) y.tokTypes["_" + er] = li[er];

                                        function bi(T) { T = T.split(" "); var z = "",
                                                W = [];
                                            t: for(var X = 0; X < T.length; ++X) { for(var gt = 0; gt < W.length; ++gt)
                                                    if(W[gt][0].length == T[X].length) { W[gt].push(T[X]); continue t } W.push([T[X]]) }

                                            function mt(Dt) { if(Dt.length == 1) return z += "return str === " + JSON.stringify(Dt[0]) + ";";
                                                z += "switch(str){"; for(var be = 0; be < Dt.length; ++be) z += "case " + JSON.stringify(Dt[be]) + ":";
                                                z += "return true}return false;" } if(W.length > 3) { W.sort(function(Dt, be) { return be.length - Dt.length }), z += "switch(str.length){"; for(var X = 0; X < W.length; ++X) { var yt = W[X];
                                                    z += "case " + yt[0].length + ":", mt(yt) } z += "}" } else mt(T); return new Function("str", z) } var Pr = bi("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),
                                            Dr = bi("class enum extends super const export import"),
                                            ir = bi("implements interface let package private protected public static yield"),
                                            Li = bi("eval arguments"),
                                            Tr = bi("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),
                                            Lr = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                                            rr = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
                                            Or = "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u0620-\u0649\u0672-\u06D3\u06E7-\u06E8\u06FB-\u06FC\u0730-\u074A\u0800-\u0814\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0840-\u0857\u08E4-\u08FE\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09D7\u09DF-\u09E0\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5F-\u0B60\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2-\u0CE3\u0CE6-\u0CEF\u0D02\u0D03\u0D46-\u0D48\u0D57\u0D62-\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E34-\u0E3A\u0E40-\u0E45\u0E50-\u0E59\u0EB4-\u0EB9\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F41-\u0F47\u0F71-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1029\u1040-\u1049\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u170E-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17B2\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1920-\u192B\u1930-\u193B\u1951-\u196D\u19B0-\u19C0\u19C8-\u19C9\u19D0-\u19D9\u1A00-\u1A15\u1A20-\u1A53\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1B46-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C00-\u1C22\u1C40-\u1C49\u1C5B-\u1C7D\u1CD0-\u1CD2\u1D00-\u1DBE\u1E01-\u1F15\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2D81-\u2D96\u2DE0-\u2DFF\u3021-\u3028\u3099\u309A\uA640-\uA66D\uA674-\uA67D\uA69F\uA6F0-\uA6F1\uA7F8-\uA800\uA806\uA80B\uA823-\uA827\uA880-\uA881\uA8B4-\uA8C4\uA8D0-\uA8D9\uA8F3-\uA8F7\uA900-\uA909\uA926-\uA92D\uA930-\uA945\uA980-\uA983\uA9B3-\uA9C0\uAA00-\uAA27\uAA40-\uAA41\uAA4C-\uAA4D\uAA50-\uAA59\uAA7B\uAAE0-\uAAE9\uAAF2-\uAAF3\uABC0-\uABE1\uABEC\uABED\uABF0-\uABF9\uFB20-\uFB28\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F",
                                            nr = new RegExp("[" + rr + "]"),
                                            Nr = new RegExp("[" + rr + Or + "]"),
                                            Oi = /[\n\r\u2028\u2029]/,
                                            pi = /\r\n|[\n\r\u2028\u2029]/g,
                                            Ni = y.isIdentifierStart = function(T) { return T < 65 ? T === 36 : T < 91 ? !0 : T < 97 ? T === 95 : T < 123 ? !0 : T >= 170 && nr.test(String.fromCharCode(T)) },
                                            sr = y.isIdentifierChar = function(T) { return T < 48 ? T === 36 : T < 58 ? !0 : T < 65 ? !1 : T < 91 ? !0 : T < 97 ? T === 95 : T < 123 ? !0 : T >= 170 && Nr.test(String.fromCharCode(T)) };

                                        function Qe() { this.line = R, this.column = b - U }

                                        function ar() { R = 1, b = U = 0, O = !0, di() }

                                        function ne(T, z) { I = b, w.locations && (N = new Qe), L = T, di(), V = z, O = T.beforeExpr }

                                        function Mr() { var T = w.onComment && w.locations && new Qe,
                                                z = b,
                                                W = _.indexOf("*/", b += 2); if(W === -1 && Q(b - 2, "Unterminated comment"), b = W + 2, w.locations) { pi.lastIndex = z; for(var X;
                                                    (X = pi.exec(_)) && X.index < b;) ++R, U = X.index + X[0].length } w.onComment && w.onComment(!0, _.slice(z + 2, W), z, b, T, w.locations && new Qe) }

                                        function Ui() { for(var T = b, z = w.onComment && w.locations && new Qe, W = _.charCodeAt(b += 2); b < A && W !== 10 && W !== 13 && W !== 8232 && W !== 8233;) ++b, W = _.charCodeAt(b);
                                            w.onComment && w.onComment(!1, _.slice(T + 2, b), T, b, z, w.locations && new Qe) }

                                        function di() { for(; b < A;) { var T = _.charCodeAt(b); if(T === 32) ++b;
                                                else if(T === 13) {++b; var z = _.charCodeAt(b);
                                                    z === 10 && ++b, w.locations && (++R, U = b) } else if(T === 10 || T === 8232 || T === 8233) ++b, w.locations && (++R, U = b);
                                                else if(T > 8 && T < 14) ++b;
                                                else if(T === 47) { var z = _.charCodeAt(b + 1); if(z === 42) Mr();
                                                    else if(z === 47) Ui();
                                                    else break } else if(T === 160) ++b;
                                                else if(T >= 5760 && Lr.test(String.fromCharCode(T))) ++b;
                                                else break } }

                                        function Vr() { var T = _.charCodeAt(b + 1); return T >= 48 && T <= 57 ? or(!0) : (++b, ne(H)) }

                                        function Rr() { var T = _.charCodeAt(b + 1); return O ? (++b, ur()) : T === 61 ? se(vt, 2) : se(et, 1) }

                                        function zr() { var T = _.charCodeAt(b + 1); return T === 61 ? se(vt, 2) : se(Ir, 1) }

                                        function qr(T) { var z = _.charCodeAt(b + 1); return z === T ? se(T === 124 ? Be : ze, 2) : z === 61 ? se(vt, 2) : se(T === 124 ? qe : Ue, 1) }

                                        function Ur() { var T = _.charCodeAt(b + 1); return T === 61 ? se(vt, 2) : se(ci, 1) }

                                        function Hr(T) { var z = _.charCodeAt(b + 1); return z === T ? z == 45 && _.charCodeAt(b + 2) == 62 && Oi.test(_.slice(K, b)) ? (b += 3, Ui(), di(), Ye()) : se(St, 2) : z === 61 ? se(vt, 2) : se(Br, 1) }

                                        function jr(T) { var z = _.charCodeAt(b + 1),
                                                W = 1; return z === T ? (W = T === 62 && _.charCodeAt(b + 2) === 62 ? 3 : 2, _.charCodeAt(b + W) === 61 ? se(vt, W + 1) : se(kr, W)) : z == 33 && T == 60 && _.charCodeAt(b + 2) == 45 && _.charCodeAt(b + 3) == 45 ? (b += 4, Ui(), di(), Ye()) : (z === 61 && (W = _.charCodeAt(b + 2) === 61 ? 3 : 2), se(Fr, W)) }

                                        function Gr(T) { var z = _.charCodeAt(b + 1); return z === 61 ? se(He, _.charCodeAt(b + 2) === 61 ? 3 : 2) : se(T === 61 ? nt : Qt, 1) }

                                        function Wr(T) { switch (T) {
                                                case 46:
                                                    return Vr();
                                                case 40:
                                                    return ++b, ne(i);
                                                case 41:
                                                    return ++b, ne(a);
                                                case 59:
                                                    return ++b, ne(E);
                                                case 44:
                                                    return ++b, ne(m);
                                                case 91:
                                                    return ++b, ne(Xe);
                                                case 93:
                                                    return ++b, ne(fi);
                                                case 123:
                                                    return ++b, ne(Re);
                                                case 125:
                                                    return ++b, ne(De);
                                                case 58:
                                                    return ++b, ne(P);
                                                case 63:
                                                    return ++b, ne(G);
                                                case 48:
                                                    var z = _.charCodeAt(b + 1); if(z === 120 || z === 88) return Zr();
                                                case 49:
                                                case 50:
                                                case 51:
                                                case 52:
                                                case 53:
                                                case 54:
                                                case 55:
                                                case 56:
                                                case 57:
                                                    return or(!1);
                                                case 34:
                                                case 39:
                                                    return Kr(T);
                                                case 47:
                                                    return Rr(T);
                                                case 37:
                                                case 42:
                                                    return zr();
                                                case 124:
                                                case 38:
                                                    return qr(T);
                                                case 94:
                                                    return Ur();
                                                case 43:
                                                case 45:
                                                    return Hr(T);
                                                case 60:
                                                case 62:
                                                    return jr(T);
                                                case 61:
                                                case 33:
                                                    return Gr(T);
                                                case 126:
                                                    return se(Qt, 1) } return !1 }

                                        function Ye(T) { if(T ? b = B + 1 : B = b, w.locations && (D = new Qe), T) return ur(); if(b >= A) return ne(_t); var z = _.charCodeAt(b); if(Ni(z) || z === 92) return lr(); var W = Wr(z); if(W === !1) { var X = String.fromCharCode(z); if(X === "\\" || nr.test(X)) return lr();
                                                Q(b, "Unexpected character '" + X + "'") } return W }

                                        function se(T, z) { var W = _.slice(b, b + z);
                                            b += z, ne(T, W) }

                                        function ur() { for(var gt = "", T, z, W = b;;) { b >= A && Q(W, "Unterminated regular expression"); var X = _.charAt(b); if(Oi.test(X) && Q(W, "Unterminated regular expression"), T) T = !1;
                                                else { if(X === "[") z = !0;
                                                    else if(X === "]" && z) z = !1;
                                                    else if(X === "/" && !z) break;
                                                    T = X === "\\" }++b } var gt = _.slice(W, b);++b; var mt = hr();
                                            mt && !/^[gmsiy]*$/.test(mt) && Q(W, "Invalid regexp flag"); try { var yt = new RegExp(gt, mt) } catch (Dt) { Dt instanceof SyntaxError && Q(W, Dt.message), Q(Dt) } return ne(at, yt) }

                                        function Si(T, z) { for(var W = b, X = 0, gt = 0, mt = z ? ? 1 / 0; gt < mt; ++gt) { var yt = _.charCodeAt(b),
                                                    Dt; if(yt >= 97 ? Dt = yt - 97 + 10 : yt >= 65 ? Dt = yt - 65 + 10 : yt >= 48 && yt <= 57 ? Dt = yt - 48 : Dt = 1 / 0, Dt >= T) break;++b, X = X * T + Dt } return b === W || z != null && b - W !== z ? null : X }

                                        function Zr() { b += 2; var T = Si(16); return T == null && Q(B + 2, "Expected hexadecimal number"), Ni(_.charCodeAt(b)) && Q(b, "Identifier directly after number"), ne(ut, T) }

                                        function or(T) { var z = b,
                                                W = !1,
                                                X = _.charCodeAt(b) === 48;!T && Si(10) === null && Q(z, "Invalid number"), _.charCodeAt(b) === 46 && (++b, Si(10), W = !0); var gt = _.charCodeAt(b);
                                            (gt === 69 || gt === 101) && (gt = _.charCodeAt(++b), (gt === 43 || gt === 45) && ++b, Si(10) === null && Q(z, "Invalid number"), W = !0), Ni(_.charCodeAt(b)) && Q(b, "Identifier directly after number"); var mt = _.slice(z, b),
                                                yt; return W ? yt = parseFloat(mt) : !X || mt.length === 1 ? yt = parseInt(mt, 10) : /[89]/.test(mt) || Z ? Q(z, "Invalid number") : yt = parseInt(mt, 8), ne(ut, yt) }

                                        function Kr(T) { b++; for(var z = "";;) { b >= A && Q(B, "Unterminated string constant"); var W = _.charCodeAt(b); if(W === T) return ++b, ne(pt, z); if(W === 92) { W = _.charCodeAt(++b); var X = /^[0-7]+/.exec(_.slice(b, b + 3)); for(X && (X = X[0]); X && parseInt(X, 8) > 255;) X = X.slice(0, -1); if(X === "0" && (X = null), ++b, X) Z && Q(b - 2, "Octal literal in strict mode"), z += String.fromCharCode(parseInt(X, 8)), b += X.length - 1;
                                                    else switch (W) {
                                                        case 110:
                                                            z += `
`; break;
                                                        case 114:
                                                            z += "\r"; break;
                                                        case 120:
                                                            z += String.fromCharCode(Mi(2)); break;
                                                        case 117:
                                                            z += String.fromCharCode(Mi(4)); break;
                                                        case 85:
                                                            z += String.fromCharCode(Mi(8)); break;
                                                        case 116:
                                                            z += "  "; break;
                                                        case 98:
                                                            z += "\b"; break;
                                                        case 118:
                                                            z += "\v"; break;
                                                        case 102:
                                                            z += "\f"; break;
                                                        case 48:
                                                            z += "\0"; break;
                                                        case 13:
                                                            _.charCodeAt(b) === 10 && ++b;
                                                        case 10:
                                                            w.locations && (U = b, ++R); break;
                                                        default:
                                                            z += String.fromCharCode(W); break } } else(W === 13 || W === 10 || W === 8232 || W === 8233) && Q(B, "Unterminated string constant"), z += String.fromCharCode(W), ++b } }

                                        function Mi(T) { var z = Si(16, T); return z === null && Q(B, "Bad character escape sequence"), z } var gi;

                                        function hr() { gi = !1; for(var T, z = !0, W = b;;) { var X = _.charCodeAt(b); if(sr(X)) gi && (T += _.charAt(b)), ++b;
                                                else if(X === 92) { gi || (T = _.slice(W, b)), gi = !0, _.charCodeAt(++b) != 117 && Q(b, "Expecting Unicode escape sequence \\uXXXX"), ++b; var gt = Mi(4),
                                                        mt = String.fromCharCode(gt);
                                                    mt || Q(b - 1, "Invalid Unicode escape"), (z ? Ni(gt) : sr(gt)) || Q(b - 4, "Invalid Unicode escape"), T += mt } else break;
                                                z = !1 } return gi ? T : _.slice(W, b) }

                                        function lr() { var T = hr(),
                                                z = ft; return !gi && Tr(T) && (z = li[T]), ne(z, T) }

                                        function It() { j = B, K = I, J = N, Ye() }

                                        function Hi(T) { if(Z = T, b = B, w.locations)
                                                for(; b < U;) U = _.lastIndexOf(`
`, U - 2) + 1, --R;
                                            di(), Ye() }

                                        function fr() { this.type = null, this.start = B, this.end = null }

                                        function cr() { this.start = D, this.end = null, c !== null && (this.source = c) }

                                        function le() { var T = new fr; return w.locations && (T.loc = new cr), w.directSourceFile && (T.sourceFile = w.directSourceFile), w.ranges && (T.range = [B, 0]), T }

                                        function je(T) { var z = new fr; return z.start = T.start, w.locations && (z.loc = new cr, z.loc.start = T.loc.start), w.ranges && (z.range = [T.range[0], 0]), z }

                                        function At(T, z) { return T.type = z, T.end = K, w.locations && (T.loc.end = J), w.ranges && (T.range[1] = K), T }

                                        function ji(T) { return w.ecmaVersion >= 5 && T.type === "ExpressionStatement" && T.expression.type === "Literal" && T.expression.value === "use strict" }

                                        function Wt(T) { if(L === T) return It(), !0 }

                                        function Vi() { return !w.strictSemicolons && (L === _t || L === De || Oi.test(_.slice(K, B))) }

                                        function Je() {!Wt(E) && !Vi() && Te() }

                                        function Jt(T) { L === T ? It() : Te() }

                                        function Te() { Q(B, "Unexpected token") }

                                        function Ri(T) { T.type !== "Identifier" && T.type !== "MemberExpression" && Q(T.start, "Assigning to rvalue"), Z && T.type === "Identifier" && Li(T.name) && Q(T.start, "Assigning to " + T.name + " in strict mode") }

                                        function Xr(T) { j = K = b, w.locations && (J = new Qe), rt = Z = null, st = [], Ye(); var z = T || le(),
                                                W = !0; for(T || (z.body = []); L !== _t;) { var X = Ae();
                                                z.body.push(X), W && ji(X) && Hi(!0), W = !1 } return At(z, "Program") } var Gi = { kind: "loop" },
                                            Qr = { kind: "switch" };

                                        function Ae() {
                                            (L === et || L === vt && V == "/=") && Ye(!0); var T = L,
                                                z = le(); switch (T) {
                                                case wt:
                                                case Xt:
                                                    It(); var W = T === wt;
                                                    Wt(E) || Vi() ? z.label = null : L !== ft ? Te() : (z.label = Ge(), Je()); for(var X = 0; X < st.length; ++X) { var gt = st[X]; if((z.label == null || gt.name === z.label.name) && (gt.kind != null && (W || gt.kind === "loop") || z.label && W)) break } return X === st.length && Q(z.start, "Unsyntactic " + T.keyword), At(z, W ? "BreakStatement" : "ContinueStatement");
                                                case te:
                                                    return It(), Je(), At(z, "DebuggerStatement");
                                                case Pt:
                                                    return It(), st.push(Gi), z.body = Ae(), st.pop(), Jt(ce), z.test = Ei(), Je(), At(z, "DoWhileStatement");
                                                case Lt:
                                                    if(It(), st.push(Gi), Jt(i), L === E) return Wi(z, null); if(L === ke) { var mt = le(); return It(), dr(mt, !0), At(mt, "VariableDeclaration"), mt.declarations.length === 1 && Wt(Ke) ? pr(z, mt) : Wi(z, mt) } var mt = pe(!1, !0); return Wt(Ke) ? (Ri(mt), pr(z, mt)) : Wi(z, mt);
                                                case qt:
                                                    return It(), Yi(z, !0);
                                                case Fe:
                                                    return It(), z.test = Ei(), z.consequent = Ae(), z.alternate = Wt(Gt) ? Ae() : null, At(z, "IfStatement");
                                                case ye:
                                                    return !rt && !w.allowReturnOutsideFunction && Q(B, "'return' outside of function"), It(), Wt(E) || Vi() ? z.argument = null : (z.argument = pe(), Je()), At(z, "ReturnStatement");
                                                case Ce:
                                                    It(), z.discriminant = Ei(), z.cases = [], Jt(Re), st.push(Qr); for(var yt, Dt; L != De;)
                                                        if(L === Y || L === jt) { var be = L === Y;
                                                            yt && At(yt, "SwitchCase"), z.cases.push(yt = le()), yt.consequent = [], It(), be ? yt.test = pe() : (Dt && Q(j, "Multiple default clauses"), Dt = !0, yt.test = null), Jt(P) } else yt || Te(), yt.consequent.push(Ae()); return yt && At(yt, "SwitchCase"), It(), st.pop(), At(z, "SwitchStatement");
                                                case fe:
                                                    return It(), Oi.test(_.slice(K, B)) && Q(K, "Illegal newline after throw"), z.argument = pe(), Je(), At(z, "ThrowStatement");
                                                case _e:
                                                    if(It(), z.block = Fi(), z.handler = null, L === Tt) { var $e = le();
                                                        It(), Jt(i), $e.param = Ge(), Z && Li($e.param.name) && Q($e.param.start, "Binding " + $e.param.name + " in strict mode"), Jt(a), $e.guard = null, $e.body = Fi(), z.handler = At($e, "CatchClause") } return z.guardedHandlers = $, z.finalizer = Wt(he) ? Fi() : null, !z.handler && !z.finalizer && Q(z.start, "Missing catch or finally clause"), At(z, "TryStatement");
                                                case ke:
                                                    return It(), dr(z), Je(), At(z, "VariableDeclaration");
                                                case ce:
                                                    return It(), z.test = Ei(), st.push(Gi), z.body = Ae(), st.pop(), At(z, "WhileStatement");
                                                case We:
                                                    return Z && Q(B, "'with' in strict mode"), It(), z.object = Ei(), z.body = Ae(), At(z, "WithStatement");
                                                case Re:
                                                    return Fi();
                                                case E:
                                                    return It(), At(z, "EmptyStatement");
                                                default:
                                                    var $i = V,
                                                        zi = pe(); if(T === ft && zi.type === "Identifier" && Wt(P)) { for(var X = 0; X < st.length; ++X) st[X].name === $i && Q(zi.start, "Label '" + $i + "' is already declared"); var rn = L.isLoop ? "loop" : L === Ce ? "switch" : null; return st.push({ name: $i, kind: rn }), z.body = Ae(), st.pop(), z.label = zi, At(z, "LabeledStatement") } else return z.expression = zi, Je(), At(z, "ExpressionStatement") } }

                                        function Ei() { Jt(i); var T = pe(); return Jt(a), T }

                                        function Fi(T) { var z = le(),
                                                W = !0,
                                                X = !1,
                                                gt; for(z.body = [], Jt(Re); !Wt(De);) { var mt = Ae();
                                                z.body.push(mt), W && T && ji(mt) && (gt = X, Hi(X = !0)), W = !1 } return X && !gt && Hi(!1), At(z, "BlockStatement") }

                                        function Wi(T, z) { return T.init = z, Jt(E), T.test = L === E ? null : pe(), Jt(E), T.update = L === a ? null : pe(), Jt(a), T.body = Ae(), st.pop(), At(T, "ForStatement") }

                                        function pr(T, z) { return T.left = z, T.right = pe(), Jt(a), T.body = Ae(), st.pop(), At(T, "ForInStatement") }

                                        function dr(T, z) { for(T.declarations = [], T.kind = "var";;) { var W = le(); if(W.id = Ge(), Z && Li(W.id.name) && Q(W.id.start, "Binding " + W.id.name + " in strict mode"), W.init = Wt(nt) ? pe(!0, z) : null, T.declarations.push(At(W, "VariableDeclarator")), !Wt(m)) break } return T }

                                        function pe(T, z) { var W = Zi(z); if(!T && L === m) { var X = je(W); for(X.expressions = [W]; Wt(m);) X.expressions.push(Zi(z)); return At(X, "SequenceExpression") } return W }

                                        function Zi(T) { var z = Yr(T); if(L.isAssign) { var W = je(z); return W.operator = V, W.left = z, It(), W.right = Zi(T), Ri(z), At(W, "AssignmentExpression") } return z }

                                        function Yr(T) { var z = Jr(T); if(Wt(G)) { var W = je(z); return W.test = z, W.consequent = pe(!0), Jt(P), W.alternate = pe(!0, T), At(W, "ConditionalExpression") } return z }

                                        function Jr(T) { return Ki(Xi(), -1, T) }

                                        function Ki(T, z, W) { var X = L.binop; if(X != null && (!W || L !== Ke) && X > z) { var gt = je(T);
                                                gt.left = T, gt.operator = V; var mt = L;
                                                It(), gt.right = Ki(Xi(), X, W); var yt = At(gt, mt === Be || mt === ze ? "LogicalExpression" : "BinaryExpression"); return Ki(yt, z, W) } return T }

                                        function Xi() { if(L.prefix) { var T = le(),
                                                    z = L.isUpdate; return T.operator = V, T.prefix = !0, O = !0, It(), T.argument = Xi(), z ? Ri(T.argument) : Z && T.operator === "delete" && T.argument.type === "Identifier" && Q(T.start, "Deleting local variable in strict mode"), At(T, z ? "UpdateExpression" : "UnaryExpression") } for(var W = $r(); L.postfix && !Vi();) { var T = je(W);
                                                T.operator = V, T.prefix = !1, T.argument = W, Ri(W), It(), W = At(T, "UpdateExpression") } return W }

                                        function $r() { return ki(Qi()) }

                                        function ki(T, z) { if(Wt(H)) { var W = je(T); return W.object = T, W.property = Ge(!0), W.computed = !1, ki(At(W, "MemberExpression"), z) } else if(Wt(Xe)) { var W = je(T); return W.object = T, W.property = pe(), W.computed = !0, Jt(fi), ki(At(W, "MemberExpression"), z) } else if(!z && Wt(i)) { var W = je(T); return W.callee = T, W.arguments = Ji(a, !1), ki(At(W, "CallExpression"), z) } else return T }

                                        function Qi() { switch (L) {
                                                case Ai:
                                                    var X = le(); return It(), At(X, "ThisExpression");
                                                case ft:
                                                    return Ge();
                                                case ut:
                                                case pt:
                                                case at:
                                                    var X = le(); return X.value = V, X.raw = _.slice(B, I), It(), At(X, "Literal");
                                                case Ze:
                                                case bt:
                                                case Ti:
                                                    var X = le(); return X.value = L.atomValue, X.raw = L.keyword, It(), At(X, "Literal");
                                                case i:
                                                    var T = D,
                                                        z = B;
                                                    It(); var W = pe(); return W.start = z, W.end = I, w.locations && (W.loc.start = T, W.loc.end = N), w.ranges && (W.range = [z, I]), Jt(a), W;
                                                case Xe:
                                                    var X = le(); return It(), X.elements = Ji(fi, !0, !0), At(X, "ArrayExpression");
                                                case Re:
                                                    return en();
                                                case qt:
                                                    var X = le(); return It(), Yi(X, !1);
                                                case xi:
                                                    return tn();
                                                default:
                                                    Te() } }

                                        function tn() { var T = le(); return It(), T.callee = ki(Qi(), !0), Wt(i) ? T.arguments = Ji(a, !1) : T.arguments = $, At(T, "NewExpression") }

                                        function en() { var T = le(),
                                                z = !0,
                                                W = !1; for(T.properties = [], It(); !Wt(De);) { if(z) z = !1;
                                                else if(Jt(m), w.allowTrailingCommas && Wt(De)) break; var X = { key: gr() },
                                                    gt = !1,
                                                    mt; if(Wt(P) ? (X.value = pe(!0), mt = X.kind = "init") : w.ecmaVersion >= 5 && X.key.type === "Identifier" && (X.key.name === "get" || X.key.name === "set") ? (gt = W = !0, mt = X.kind = X.key.name, X.key = gr(), L !== i && Te(), X.value = Yi(le(), !1)) : Te(), X.key.type === "Identifier" && (Z || W))
                                                    for(var yt = 0; yt < T.properties.length; ++yt) { var Dt = T.properties[yt]; if(Dt.key.name === X.key.name) { var be = mt == Dt.kind || gt && Dt.kind === "init" || mt === "init" && (Dt.kind === "get" || Dt.kind === "set");
                                                            be && !Z && mt === "init" && Dt.kind === "init" && (be = !1), be && Q(X.key.start, "Redefinition of property") } } T.properties.push(X) } return At(T, "ObjectExpression") }

                                        function gr() { return L === ut || L === pt ? Qi() : Ge(!0) }

                                        function Yi(T, z) { L === ft ? T.id = Ge() : z ? Te() : T.id = null, T.params = []; var W = !0; for(Jt(i); !Wt(a);) W ? W = !1 : Jt(m), T.params.push(Ge()); var X = rt,
                                                gt = st; if(rt = !0, st = [], T.body = Fi(!0), rt = X, st = gt, Z || T.body.body.length && ji(T.body.body[0]))
                                                for(var mt = T.id ? -1 : 0; mt < T.params.length; ++mt) { var yt = mt < 0 ? T.id : T.params[mt]; if((ir(yt.name) || Li(yt.name)) && Q(yt.start, "Defining '" + yt.name + "' in strict mode"), mt >= 0)
                                                        for(var Dt = 0; Dt < mt; ++Dt) yt.name === T.params[Dt].name && Q(yt.start, "Argument name clash in strict mode") }
                                            return At(T, z ? "FunctionDeclaration" : "FunctionExpression") }

                                        function Ji(T, z, W) { for(var X = [], gt = !0; !Wt(T);) { if(gt) gt = !1;
                                                else if(Jt(m), z && w.allowTrailingCommas && Wt(T)) break;
                                                W && L === m ? X.push(null) : X.push(pe(!0)) } return X }

                                        function Ge(T) { var z = le(); return T && w.forbidReserved == "everywhere" && (T = !1), L === ft ? (!T && (w.forbidReserved && (w.ecmaVersion === 3 ? Pr : Dr)(V) || Z && ir(V)) && _.slice(B, I)
                                                .indexOf("\\") == -1 && Q(B, "The keyword '" + V + "' is reserved"), z.name = V) : T && L.keyword ? z.name = L.keyword : Te(), O = !1, It(), At(z, "Identifier") } }), e.version || (e = null) }

                            function s(y, w) { return (t.acorn || e)
                                    .parse(y, w) } var u = { "+": "__add", "-": "__subtract", "*": "__multiply", "/": "__divide", "%": "__modulo", "==": "__equals", "!=": "__equals" },
                                h = { "-": "__negate", "+": "__self" },
                                o = M.each(["add", "subtract", "multiply", "divide", "modulo", "equals", "negate"], function(y) { this["__" + y] = "#" + y }, { __self: function() { return this } });
                            q.inject(o), ot.inject(o), Yt.inject(o);

                            function l(y, w, _) { var A = u[w]; if(y && y[A]) { var c = y[A](_); return w === "!=" ? !c : c } switch (w) {
                                    case "+":
                                        return y + _;
                                    case "-":
                                        return y - _;
                                    case "*":
                                        return y * _;
                                    case "/":
                                        return y / _;
                                    case "%":
                                        return y % _;
                                    case "==":
                                        return y == _;
                                    case "!=":
                                        return y != _ } }

                            function f(y, w) { var _ = h[y]; if(w && w[_]) return w[_](); switch (y) {
                                    case "+":
                                        return +w;
                                    case "-":
                                        return -w } }

                            function g(y, w) { if(!y) return "";
                                w = w || {}; var _ = [];

                                function A(Z) { for(var Q = 0, $ = _.length; Q < $; Q++) { var ut = _[Q]; if(ut[0] >= Z) break;
                                        Z += ut[1] } return Z }

                                function c(Z) { return y.substring(A(Z.range[0]), A(Z.range[1])) }

                                function C(Z, Q) { return y.substring(A(Z.range[1]), A(Q.range[0])) }

                                function S(Z, Q) { for(var $ = A(Z.range[0]), ut = A(Z.range[1]), at = 0, pt = _.length - 1; pt >= 0; pt--)
                                        if($ > _[pt][0]) { at = pt + 1; break } _.splice(at, 0, [$, Q.length - ut + $]), y = y.substring(0, $) + Q + y.substring(ut) }

                                function F(Z, Q) { switch (Z.type) {
                                        case "UnaryExpression":
                                            if(Z.operator in h && Z.argument.type !== "Literal") { var $ = c(Z.argument);
                                                S(Z, '$__("' + Z.operator + '", ' + $ + ")") } break;
                                        case "BinaryExpression":
                                            if(Z.operator in u && Z.left.type !== "Literal") { var ut = c(Z.left),
                                                    at = c(Z.right),
                                                    pt = C(Z.left, Z.right),
                                                    ft = Z.operator;
                                                S(Z, "__$__(" + ut + "," + pt.replace(new RegExp("\\" + ft), '"' + ft + '"') + ", " + at + ")") } break;
                                        case "UpdateExpression":
                                        case "AssignmentExpression":
                                            var _t = Q && Q.type; if(!(_t === "ForStatement" || _t === "BinaryExpression" && /^[=!<>]/.test(Q.operator) || _t === "MemberExpression" && Q.computed)) { if(Z.type === "UpdateExpression") { var $ = c(Z.argument),
                                                        wt = "__$__(" + $ + ', "' + Z.operator[0] + '", 1)',
                                                        Y = $ + " = " + wt;
                                                    Z.prefix ? Y = "(" + Y + ")" : (_t === "AssignmentExpression" || _t === "VariableDeclarator" || _t === "BinaryExpression") && (c(Q.left || Q.id) === $ && (Y = wt), Y = $ + "; " + Y), S(Z, Y) } else if(/^.=$/.test(Z.operator) && Z.left.type !== "Literal") { var ut = c(Z.left),
                                                        at = c(Z.right),
                                                        wt = ut + " = __$__(" + ut + ', "' + Z.operator[0] + '", ' + at + ")";
                                                    S(Z, /^\(.*\)$/.test(c(Z)) ? "(" + wt + ")" : wt) } } break } }

                                function b(Z) { switch (Z.type) {
                                        case "ExportDefaultDeclaration":
                                            S({ range: [Z.start, Z.declaration.start] }, "module.exports = "); break;
                                        case "ExportNamedDeclaration":
                                            var Q = Z.declaration,
                                                $ = Z.specifiers; if(Q) { var ut = Q.declarations;
                                                ut && (ut.forEach(function(pt) { S(pt, "module.exports." + c(pt)) }), S({ range: [Z.start, Q.start + Q.kind.length] }, "")) } else if($) { var at = $.map(function(pt) { var ft = c(pt); return "module.exports." + ft + " = " + ft + "; " })
                                                    .join("");
                                                at && S(Z, at) } break } }

                                function B(Z, Q, $) { if(Z) { for(var ut in Z)
                                            if(ut !== "range" && ut !== "loc") { var at = Z[ut]; if(Array.isArray(at))
                                                    for(var pt = 0, ft = at.length; pt < ft; pt++) B(at[pt], Z, $);
                                                else at && typeof at == "object" && B(at, Z, $) } $.operatorOverloading !== !1 && F(Z, Q), $.moduleExports !== !1 && b(Z) } }

                                function I(Z) { var Q = "",
                                        $ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; for(Z = (Math.abs(Z) << 1) + (Z < 0 ? 1 : 0); Z || !Q;) { var ut = Z & 31;
                                        Z >>= 5, Z && (ut |= 32), Q += $[ut] } return Q } var D = w.url || "",
                                    N = w.sourceMaps,
                                    L = w.paperFeatures || {},
                                    V = w.source || y,
                                    O = w.offset || 0,
                                    R = dt.agent,
                                    U = R.versionNumber,
                                    j = !1,
                                    K = /\r\n|\n|\r/mg,
                                    J; if(N && (R.chrome && U >= 30 || R.webkit && U >= 537.76 || R.firefox && U >= 23 || R.node)) { if(R.node) O -= 2;
                                    else if(Ot && D && !Ot.location.href.indexOf(D)) { var rt = kt.getElementsByTagName("html")[0].innerHTML;
                                        O = rt.substr(0, rt.indexOf(y) + 1)
                                            .match(K)
                                            .length + 1 } j = O > 0 && !(R.chrome && U >= 36 || R.safari && U >= 600 || R.firefox && U >= 40 || R.node); var st = ["AA" + I(j ? 0 : O) + "A"];
                                    st.length = (y.match(K) || [])
                                        .length + 1 + (j ? O : 0), J = { version: 3, file: D, names: [], mappings: st.join(";AACA"), sourceRoot: "", sources: [D], sourcesContent: [V] } } return (L.operatorOverloading !== !1 || L.moduleExports !== !1) && B(s(y, { ranges: !0, preserveParens: !0, sourceType: "module" }), null, L), J && (j && (y = new Array(O + 1)
                                    .join(`
`) + y), /^(inline|both)$/.test(N) && (y += `
//# sourceMappingURL=data:application/json;base64,` + Ht.btoa(unescape(encodeURIComponent(JSON.stringify(J))))), y += `
//# sourceURL=` + (D || "paperscript")), { url: D, source: V, code: y, map: J } }

                            function v(y, w, _) { dt = w; var A = w.getView(),
                                    c = /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(y) && !/\bnew\s+Tool\b/.test(y) ? new oi : null,
                                    C = c ? c._events : [],
                                    S = ["onFrame", "onResize"].concat(C),
                                    F = [],
                                    b = [],
                                    B, I = typeof y == "object" ? y : g(y, _);
                                y = I.code;

                                function D(U, j) { for(var K in U)(j || !/^_/.test(K)) && new RegExp("([\\b\\s\\W]|^)" + K.replace(/\$/g, "\\$") + "\\b")
                                        .test(y) && (F.push(K), b.push(U[K])) } D({ __$__: l, $__: f, paper: w, tool: c }, !0), D(w), y = "var module = { exports: {} }; " + y; var O = M.each(S, function(U) { new RegExp("\\s+" + U + "\\b")
                                            .test(y) && (F.push(U), this.push("module.exports." + U + " = " + U + ";")) }, [])
                                    .join(`
`);
                                O && (y += `
` + O), y += `
return module.exports;`; var N = dt.agent; if(kt && (N.chrome || N.firefox && N.versionNumber < 40)) { var L = kt.createElement("script"),
                                        V = kt.head || kt.getElementsByTagName("head")[0];
                                    N.firefox && (y = `
` + y), L.appendChild(kt.createTextNode("document.__paperscript__ = function(" + F + ") {" + y + `
}`)), V.appendChild(L), B = kt.__paperscript__, delete kt.__paperscript__, V.removeChild(L) } else B = Function(F, y); var O = B && B.apply(w, b),
                                    R = O || {}; return M.each(C, function(U) { var j = R[U];
                                    j && (c[U] = j) }), A && (R.onResize && A.setOnResize(R.onResize), A.emit("resize", { size: A.size, delta: new q }), R.onFrame && A.setOnFrame(R.onFrame), A.requestUpdate()), O }

                            function d(y) { if(/^text\/(?:x-|)paperscript$/.test(y.type) && ve.getAttribute(y, "ignore") !== "true") { var w = ve.getAttribute(y, "canvas"),
                                        _ = kt.getElementById(w),
                                        A = y.src || y.getAttribute("data-src"),
                                        c = ve.hasAttribute(y, "async"),
                                        C = "data-paper-scope"; if(!_) throw new Error('Unable to find canvas with id "' + w + '"'); var S = ve.get(_.getAttribute(C)) || new ve()
                                        .setup(_); return _.setAttribute(C, S._id), A ? we.request({ url: A, async: c, mimeType: "text/plain", onLoad: function(F) { v(F, S, A) } }) : v(y.innerHTML, S, y.baseURI), y.setAttribute("data-paper-ignore", "true"), S } }

                            function p() { M.each(kt && kt.getElementsByTagName("script"), d) }

                            function x(y) { return y ? d(y) : p() } return Ot && (kt.readyState === "complete" ? setTimeout(p) : Zt.add(Ot, { load: p })), { compile: g, execute: v, load: x, parse: s, calculateBinary: l, calculateUnary: f } }.call(this); var dt = new(ve.inject(M.exports, { Base: M, Numerical: Ft, Key: Ve, DomEvent: Zt, DomElement: Vt, document: kt, window: Ot, Symbol: Se, PlacedSymbol: si })); return dt.agent.node && Ar()(dt), typeof define == "function" && define.amd ? define("paper", dt) : typeof Mt == "object" && Mt && (Mt.exports = dt), dt }.call(Nt, typeof self == "object" ? self : null) } }),
            Sr = _i({ "node_modules/paper-jsdom/index.js"(Nt, Mt) { Mt.exports = br() } }),
            vi = Cr(Sr(), 1);
        vi.default.setup(new vi.default.Size(100, 100)); var Er = (Nt, Mt, Et) => { vi.default.view.autoUpdate = !1; let Ht = new vi.default.CompoundPath(Nt),
                tt = new vi.default.CompoundPath(Mt),
                Ot = Ht[Et](tt);
            Ht.remove(), tt.remove(); let kt = Ot.pathData; return Ot.remove(), kt };
        global.boolOp = Er })(); })();
/*! Bundled license information:

paper/dist/paper-full.js:
  (*!
   * Paper.js v0.12.17 - The Swiss Army Knife of Vector Graphics Scripting.
   * http://paperjs.org/
   *
   * Copyright (c) 2011 - 2020, Jürg Lehni & Jonathan Puckey
   * http://juerglehni.com/ & https://puckey.studio/
   *
   * Distributed under the MIT license. See LICENSE file for details.
   *
   * All rights reserved.
   *
   * Date: Thu Nov 3 21:15:36 2022 +0100
   *
   ***
   *
   * Straps.js - Class inheritance library with support for bean-style accessors
   *
   * Copyright (c) 2006 - 2020 Jürg Lehni
   * http://juerglehni.com/
   *
   * Distributed under the MIT license.
   *
   ***
   *
   * Acorn.js
   * https://marijnhaverbeke.nl/acorn/
   *
   * Acorn is a tiny, fast JavaScript parser written in JavaScript,
   * created by Marijn Haverbeke and released under an MIT license.
   *
   *)
*/

const d1 = 'M100,200c0,-55.22847 44.77153,-100 100,-100c55.22847,0 100,44.77153 100,100c0,55.22847 -44.77153,100 -100,100c-55.22847,0 -100,-44.77153 -100,-100z';
const d2 = 'M200,300c0,-55.22847 44.77153,-100 100,-100c55.22847,0 100,44.77153 100,100c0,55.22847 -44.77153,100 -100,100c-55.22847,0 -100,-44.77153 -100,-100z';

const patch = new Patch();
patch.alwaysNeedsToEvaluate = false;

patch.inputs = [
    new PatchInput("Path 1", types.STRING, d1),
    new PatchInput("Path 2", types.STRING, d2),
    new PatchInput("Operation", types.STRING, "unite"),
];

patch.outputs = [
    new PatchOutput("Output", types.STRING),
];

patch.evaluate = function() {
    patch.outputs[0].value =
        global.boolOp(
            patch.inputs[0].value,
            patch.inputs[1].value,
            patch.inputs[2].value
        );
}

return patch;
