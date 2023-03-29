function getListStudentIds(lists) {
  if (!Array.isArray(lists)) {
    return [];
  }

  return lists.map((ele) => ele.id);
}

export default getListStudentIds;
