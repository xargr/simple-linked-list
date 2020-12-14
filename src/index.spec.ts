import LinkedList from "./index"

describe("Test simple-linked-list", () => {
  it("should work with number", () => {
    const list = new LinkedList<number>();
    list.push(2);
    list.push(5);

    expect(list.getSize()).toEqual(2);
  });

  it("should work with string", () => {
    const list = new LinkedList<string>();
    list.push("simple");
    list.push("linked");
    list.push("list");

    expect(list.getSize()).toEqual(3);
  });

  it("isEmpty works", () => {
    const list = new LinkedList<number>();
    expect(list.isEmpty()).toBeTruthy();

    const list2 = new LinkedList<number>();
    list2.push(2);
    expect(list2.isEmpty()).toBeFalsy();
  });

  it("remove works", () => {
    const list = new LinkedList<number>();
    list.push(2);
    list.push(4);
    list.push(8);
    list.remove(1)
    expect(list.getSize()).toEqual(2);
    expect(list.remove(-1)).toBeFalsy();
    expect(list.remove(0)).toEqual(2);
  });

  it("reset works", () => {
    const list = new LinkedList<number>();
    list.push(2);
    list.push(4);
    list.push(8);
    list.reset();
    expect(list.getSize()).toEqual(0);
  });

  it("toString works with primitives", () => {
    const list = new LinkedList<number>();
    expect(list.toString()).toEqual("");
    list.push(2);
    list.push(4);
    expect(list.toString()).toEqual("2,4");
  });

  it("insert works", () => {
    const list = new LinkedList<number>();
    list.push(2);
    list.push(4);
    list.insert(3, 1);
    expect(list.get(1)).toEqual(3);
    list.insert(10, 0);
    expect(list.get(0)).toEqual(10);
    expect(list.insert(11, -1)).toBeFalsy();
  });

  it("indexOf works", () => {
    const list = new LinkedList<number>();
    list.push(2);
    list.push(4);
    expect(list.indexOf(4)).toEqual(1);
    expect(list.indexOf(2)).toEqual(0);
    expect(list.indexOf(3)).toEqual(-1);
  });

  it("indexOf works", () => {
    const list = new LinkedList<number>();
    list.push(2);
    list.push(4);
    expect(list.constains(2)).toBeTruthy();
  });

  it("get works", () => {
    const list = new LinkedList<number>();
    list.push(2);
    list.push(4);
    expect(list.get(-2)).toBeNull();
  });

  it("traverse works", () => {
    const list = new LinkedList<number>();
    list.push(2);
    list.push(4);

    const arr = [];

    for (const value of list.traverse()) {
      arr.push(value);
    }

    expect(arr).toEqual([2, 4]);
  });
});