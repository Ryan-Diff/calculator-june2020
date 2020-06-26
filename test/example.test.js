
import { addtest, subtest, multtest, divtest } from '../utils.js';



const test = QUnit.test;

test('addtest', function(expect) {
    const firstnum = 2;
    const secondnum = 4;
    const expected = 6;
    const actual = addtest(firstnum, secondnum);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('addtest', function(expect) {
    const firstnum = 5;
    const secondnum = 3;
    const expected = 8;
    const actual = addtest(firstnum, secondnum);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('addtest', function(expect) {
    const firstnum = 23;
    const secondnum = 7;
    const expected = 30;
    const actual = addtest(firstnum, secondnum);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('subtest', function(expect) {
    const firstnum = 5;
    const secondnum = 3;
    const expected = 2;
    const actual = subtest(firstnum, secondnum);
    expect.equal(expected, actual);
});

test('subtest', function(expect) {
    const firstnum = 11;
    const secondnum = 11;
    const expected = 0;
    const actual = subtest(firstnum, secondnum);
    expect.equal(expected, actual);
});

test('subtest', function(expect) {
    const firstnum = -1;
    const secondnum = 1;
    const expected = -2;
    const actual = subtest(firstnum, secondnum);
    expect.equal(expected, actual);
});

test('multtest', function(expect) {
    const firstnum = 3;
    const secondnum = 3;
    const expected = 9;
    const actual = multtest(firstnum, secondnum);
    expect.equal(expected, actual);
});

test('multtest', function(expect) {
    const firstnum = 21;
    const secondnum = 21;
    const expected = 441;
    const actual = multtest(firstnum, secondnum);
    expect.equal(expected, actual);
});

test('multtest', function(expect) {
    const firstnum = -3;
    const secondnum = 3;
    const expected = -9;
    const actual = multtest(firstnum, secondnum);
    expect.equal(expected, actual);
});

test('divtest', function(expect) {
    const firstnum = 5;
    const secondnum = 1;
    const expected = 5;
    const actual = divtest(firstnum, secondnum);
    expect.equal(expected, actual);
});

test('divtest', function(expect) {
    const firstnum = -25;
    const secondnum = 5;
    const expected = -5;
    const actual = divtest(firstnum, secondnum);
    expect.equal(expected, actual);
});

test('divtest', function(expect) {
    const firstnum = 100;
    const secondnum = 20;
    const expected = 5;
    const actual = divtest(firstnum, secondnum);
    expect.equal(expected, actual);
});
