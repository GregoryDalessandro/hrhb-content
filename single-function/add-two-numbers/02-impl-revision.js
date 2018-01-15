const addTwoNumbers = (l1, l2) => {
  let carryover = 0,
    dummyhead = { val: 0, next: null },
    curr = dummyhead;

  while (l1 !== null || l2 !== null) {
    let list1Value = l1 !== null ? l1.val : 0;
    let list2Value = l2 !== null ? l2.val : 0;
    let sum = list1Value + list2Value + carryover;
    carryover = Math.floor(sum / 10);
    curr.next = { val: sum % 10, next: null };
    curr = curr.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carryover > 0) {
    curr.next = { val: carryover, next: null };
  }

  return dummyhead.next;
};

module.exports = addTwoNumbers;
