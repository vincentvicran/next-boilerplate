/**
 * Get the owner name label for owners
 * @param { array } owners
 * @returns { string }
 */
export function getOwnerName(owners: any[]) {
  if (!owners) {
    return ''
  }

  const withoutFinancedBy = owners?.filter(
    (data) => !(data.company_details && data.type_details.financed_by),
  )

  let ownerName = 'Owner:'

  if (withoutFinancedBy.length > 1) {
    ownerName = 'Co-owner:'
  }

  return ownerName
}
