export default function tryy(tryer = () => {}, catcher, finaliser) {
  try {
    return tryer();
  } catch (err) {
    return (
      typeof catcher === 'function' ?
        catcher(err) :
        catcher
    );
  } finally {
    if (typeof finaliser === 'function') {
      finaliser();
    }
  }
}

if (process.env.NODE_ENV === 'test') {
  const assert = (v, msg = '') => {
    if (!v) {
      throw new Error(`Assert failed: ${msg}`);
    }
  };

  const spy = ({
    callCount: 0,
    stub() {
      spy.callCount += 1;
    },
    reset() {
      spy.callCount = 0;
    }
  });

  assert(
    tryy() === undefined,
    'undefined is returned if nothing is supplied'
  );

  assert(
    tryy(() => 1) === 1,
    'tryer is called and returned if it does not throw'
  );

  assert(
    tryy(
      () => {
        throw new Error('Nope');
      },
      e => e.message
    ) === 'Nope',
    'catcher is called and returned if tryer throws'
  );

  assert(
    tryy(
      () => {
        throw new Error('Nope');
      },
      'Meh'
    ) === 'Meh',
    'catcher value is returned if tryer throws'
  );

  spy.reset();
  assert(
    tryy(
      () => {
        throw new Error('Nope');
      },
      () => 'Yep',
      spy.stub
    ) === 'Yep',
    'catcher value is returned if finalizer is supplied and tryer throws'
  );
  assert(
    spy.callCount === 1,
    'finalizer was called if tryer throws'
  );

  spy.reset();
  assert(
    tryy(
      () => 1,
      e => e.message,
      spy.stub
    ) === 1,
    'tryer value is returned if finalizer is supplied'
  );
  assert(
    spy.callCount === 1,
    'finalizer is called if supplied and tryer does not throw'
  );
}
