export const useAddFormEditable = (data: any, type: any) => {
  /**
   * TODO: Make form editable or not depending on data using `processDetail`.
   * Check: processDetail.extra_details => here data refers to processDetail
   * If processDetail.extra_details is null, then make every fields editable.
   * If processDetail.extra_details is not null, then check: processDetail.extra_details.doc_type
   * If processDetail.extra_details.doc_type is current active tab (eg: insurance tab),
   * then only make this tab editable.
   */

  let isFormEditable = false
  if (!data.extra_details) {
    isFormEditable = true
  } else {
    if (data.extra_details.doc_type === type) {
      isFormEditable = true
    } else {
      isFormEditable = false
    }
  }

  return isFormEditable
}
