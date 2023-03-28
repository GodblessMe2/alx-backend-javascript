function getListStudentIds(lists) {
  if (!Array.isArray(lists)) {
    return [];
  }

  return lists.map((id) => id.id);
}

export default getListStudentIds;
