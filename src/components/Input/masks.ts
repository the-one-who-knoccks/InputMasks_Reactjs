export function zip(event:React.FormEvent<HTMLInputElement>) {

  event.currentTarget.maxLength = 9;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2")
  event.currentTarget.value = value;
  return event;
}

export function currency(event: React.FormEvent<HTMLInputElement>) {
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2")
  value = value.replace(/(?=(\d{3})+(\D))\B/g, "")
  
  event.currentTarget.value = value;
  return event;
}