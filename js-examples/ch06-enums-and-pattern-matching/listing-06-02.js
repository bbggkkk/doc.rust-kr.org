// Rust의 다양한 배리언트 → JS에서는 type 필드로 구분하는 discriminated union
const Message = {
    Quit:        ()          => ({ type: 'Quit' }),
    Move:        (x, y)      => ({ type: 'Move', x, y }),
    Write:       (text)      => ({ type: 'Write', text }),
    ChangeColor: (r, g, b)   => ({ type: 'ChangeColor', r, g, b }),
};

const msg1 = Message.Quit();              // { type: 'Quit' }
const msg2 = Message.Move(10, 20);        // { type: 'Move', x: 10, y: 20 }
const msg3 = Message.Write('hello');      // { type: 'Write', text: 'hello' }
const msg4 = Message.ChangeColor(0,0,0);  // { type: 'ChangeColor', r: 0, g: 0, b: 0 }
