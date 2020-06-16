export const ClientStatus = {
  LEAD: 0,
  MissingInfo: 1,
  OnCampaign: 2,
  Pause: 3,
};

export const customerStatusName = (status) => {
  return status == ClientStatus.LEAD
    ? "Lead"
    : status == ClientStatus.MissingInfo
    ? "Client missing info"
    : status == ClientStatus.OnCampaign
    ? "Client"
    : "Client Pause ";
};
