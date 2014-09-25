
var hex2bin = {
  '0': '0000', '1': '0001', '2': '0010', '3': '0011',
  '4': '0100', '5': '0101', '6': '0110', '7': '0111',
  '8': '1000', '9': '1001', 'a': '1010', 'b': '1011',
  'c': '1100', 'd': '1101', 'e': '1110', 'f': '1111'
};

var map = [
  [1],
  [2],
  [4],
  [8],
  [1, 6],
  [3, 2],
  [6, 4],
  [1, 2, 8],
  [2, 5, 6],
  [5, 1, 2],
  [1, 0, 2, 4],
  [2, 0, 4, 8],
  [4, 0, 9, 6],
  [8, 1, 9, 2],
  [1, 6, 3, 8, 4],
  [3, 2, 7, 6, 8],
  [6, 5, 5, 3, 6],
  [1, 3, 1, 0, 7, 2],
  [2, 6, 2, 1, 4, 4],
  [5, 2, 4, 2, 8, 8],
  [1, 0, 4, 8, 5, 7, 6],
  [2, 0, 9, 7, 1, 5, 2],
  [4, 1, 9, 4, 3, 0, 4],
  [8, 3, 8, 8, 6, 0, 8],
  [1, 6, 7, 7, 7, 2, 1, 6],
  [3, 3, 5, 5, 4, 4, 3, 2],
  [6, 7, 1, 0, 8, 8, 6, 4],
  [1, 3, 4, 2, 1, 7, 7, 2, 8],
  [2, 6, 8, 4, 3, 5, 4, 5, 6],
  [5, 3, 6, 8, 7, 0, 9, 1, 2],
  [1, 0, 7, 3, 7, 4, 1, 8, 2, 4],
  [2, 1, 4, 7, 4, 8, 3, 6, 4, 8],
  [4, 2, 9, 4, 9, 6, 7, 2, 9, 6],
  [8, 5, 8, 9, 9, 3, 4, 5, 9, 2],
  [1, 7, 1, 7, 9, 8, 6, 9, 1, 8, 4],
  [3, 4, 3, 5, 9, 7, 3, 8, 3, 6, 8],
  [6, 8, 7, 1, 9, 4, 7, 6, 7, 3, 6],
  [1, 3, 7, 4, 3, 8, 9, 5, 3, 4, 7, 2],
  [2, 7, 4, 8, 7, 7, 9, 0, 6, 9, 4, 4],
  [5, 4, 9, 7, 5, 5, 8, 1, 3, 8, 8, 8],
  [1, 0, 9, 9, 5, 1, 1, 6, 2, 7, 7, 7, 6],
  [2, 1, 9, 9, 0, 2, 3, 2, 5, 5, 5, 5, 2],
  [4, 3, 9, 8, 0, 4, 6, 5, 1, 1, 1, 0, 4],
  [8, 7, 9, 6, 0, 9, 3, 0, 2, 2, 2, 0, 8],
  [1, 7, 5, 9, 2, 1, 8, 6, 0, 4, 4, 4, 1, 6],
  [3, 5, 1, 8, 4, 3, 7, 2, 0, 8, 8, 8, 3, 2],
  [7, 0, 3, 6, 8, 7, 4, 4, 1, 7, 7, 6, 6, 4],
  [1, 4, 0, 7, 3, 7, 4, 8, 8, 3, 5, 5, 3, 2, 8],
  [2, 8, 1, 4, 7, 4, 9, 7, 6, 7, 1, 0, 6, 5, 6],
  [5, 6, 2, 9, 4, 9, 9, 5, 3, 4, 2, 1, 3, 1, 2],
  [1, 1, 2, 5, 8, 9, 9, 9, 0, 6, 8, 4, 2, 6, 2, 4],
  [2, 2, 5, 1, 7, 9, 9, 8, 1, 3, 6, 8, 5, 2, 4, 8],
  [4, 5, 0, 3, 5, 9, 9, 6, 2, 7, 3, 7, 0, 4, 9, 6],
  [9, 0, 0, 7, 1, 9, 9, 2, 5, 4, 7, 4, 0, 9, 9, 2],
  [1, 8, 0, 1, 4, 3, 9, 8, 5, 0, 9, 4, 8, 1, 9, 8, 4],
  [3, 6, 0, 2, 8, 7, 9, 7, 0, 1, 8, 9, 6, 3, 9, 6, 8],
  [7, 2, 0, 5, 7, 5, 9, 4, 0, 3, 7, 9, 2, 7, 9, 3, 6],
  [1, 4, 4, 1, 1, 5, 1, 8, 8, 0, 7, 5, 8, 5, 5, 8, 7, 2],
  [2, 8, 8, 2, 3, 0, 3, 7, 6, 1, 5, 1, 7, 1, 1, 7, 4, 4],
  [5, 7, 6, 4, 6, 0, 7, 5, 2, 3, 0, 3, 4, 2, 3, 4, 8, 8],
  [1, 1, 5, 2, 9, 2, 1, 5, 0, 4, 6, 0, 6, 8, 4, 6, 9, 7, 6],
  [2, 3, 0, 5, 8, 4, 3, 0, 0, 9, 2, 1, 3, 6, 9, 3, 9, 5, 2],
  [4, 6, 1, 1, 6, 8, 6, 0, 1, 8, 4, 2, 7, 3, 8, 7, 9, 0, 4],
  [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8],
  [1, 8, 4, 4, 6, 7, 4, 4, 0, 7, 3, 7, 0, 9, 5, 5, 1, 6, 1, 6],
  [3, 6, 8, 9, 3, 4, 8, 8, 1, 4, 7, 4, 1, 9, 1, 0, 3, 2, 3, 2]
];

var trimReg = /^0+/;

// node version check
var ver = process.version.substring(1).split('.');
var useTypedArray = ver[0] * 100000 + ver[1] * 1000 + ver[2] * 1 >= 11013

var z32 = '00000000000000000000000000000000';
var z64 = z32+z32;

var arrayAdd = function(base, add) {
  var pos = 19, range = 20 - add.length;
  while (true) {
    if (pos >= range) {
      base[pos] += add[pos - range];
    }
    if (base[pos] > 9) {
      base[pos - 1]++;
      base[pos] -= 10;
    } else if (pos < range) {
      break;
    }
    pos--;
  }
};

module.exports = function(hex, low) {
  var ls = hs = output = btmp = binary = '', i = pos = 0, negative = false
    number = useTypedArray ?
      new Uint8Array(20) : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  // high and low
  if (low !== undefined && low != null) {
    binary = hex.toString(2) + z32.substr(0, 32-ls.length) + ls;
  // hex string
  } else if (typeof hex === 'string') {
    hex = hex.toLowerCase();
    // trim left 0x
    hex.substring(0, 2) === '0x' && (hex = hex.substring(2));
    hex = hex.substring(0, 16);
    // to bin
    for (; i < hex.length; i++) {
      binary += hex2bin[hex[i]];
    }

  // number
  } else if (typeof hex === 'number') {
    binary = hex.toString(2);
  // error
  } else {
    throw new Error('argument type errpr');
  }
  // left zero padding
  if (binary.length < 64) {
    binary = z64.substr(0, 64 - binary.length) + binary;
  }

  // negative flag
  negative = binary[0] === '1';
  binary = binary.substring(1);

  // negative flip
  if (negative) {
    for (i = 0; i < binary.length; i++) {
      btmp += (binary[i] === '1' ? '0' : '1');
    }
    binary = btmp;
  }

  // check map & calc
  pos = 0
  for (i = binary.length - 1; i >= 0; i--) {
    binary[i] === '1' && arrayAdd(number, map[pos])
    pos++;
  }

  // negative flip back
  negative && arrayAdd(number, map[0]);

  // result tostring
  btmp = '';
  for (i = 0; i < number.length; i++) {
    btmp += number[i];
  }

  // trim left zeropad
  output = btmp.replace(trimReg, '');

  // add '-'
  return negative ? '-' + output : output;

};

