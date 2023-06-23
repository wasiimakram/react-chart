const mockData = [
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 00:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 00:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 00:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 00:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 00:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 00:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 00:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 00:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 00:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 00:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 00:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 00:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 01:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 02:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 03:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 03:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 03:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 03:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 03:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 03:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 03:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 03:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 03:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 03:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 03:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 04:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 04:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 04:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 04:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 04:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 04:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 04:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 04:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 04:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 04:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 04:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 04:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 05:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 05:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG",
      minute_window: "2023-06-15 05:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 05:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 05:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 05:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 05:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 05:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 05:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 05:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 05:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 05:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 06:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 07:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 07:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 07:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Undetermined",
      minute_window: "2023-06-15 07:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Undetermined",
      minute_window: "2023-06-15 07:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 07:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 07:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 07:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 07:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 07:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 07:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 07:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 08:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 08:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 08:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 08:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 08:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 08:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 08:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 08:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 08:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 08:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 08:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 08:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 09:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 10:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 11:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 12:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 12:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 12:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 12:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 12:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 12:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 12:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-15 12:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 12:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 12:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 12:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 12:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 13:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 13:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 13:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 13:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 13:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 13:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 13:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 13:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 13:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 13:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 13:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 13:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 14:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 14:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 14:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 14:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 14:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 14:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 14:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 14:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 14:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 14:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 14:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 14:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 15:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 15:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 15:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 15:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 15:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar",
      minute_window: "2023-06-15 15:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 15:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 15:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 15:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 15:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 15:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-15 15:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-15 16:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-15 16:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Undetermined",
      minute_window: "2023-06-15 16:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Undetermined",
      minute_window: "2023-06-15 16:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Undetermined",
      minute_window: "2023-06-15 16:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Undetermined",
      minute_window: "2023-06-15 16:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 16:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 16:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 16:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 16:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 16:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 16:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 17:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Undetermined",
      minute_window: "2023-06-15 17:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 17:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 17:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 17:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 17:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 17:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 17:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 17:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 17:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 17:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 18:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 19:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-15 19:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 19:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 19:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 19:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 19:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 19:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 19:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 19:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Undetermined",
      minute_window: "2023-06-15 19:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 19:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 19:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main+Battery",
      minute_window: "2023-06-15 20:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 20:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 20:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 20:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 20:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 20:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 20:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 20:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 20:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 20:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 20:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 20:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main+Battery",
      minute_window: "2023-06-15 21:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 21:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 21:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 21:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 21:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 21:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 21:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 21:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 21:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 21:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 21:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 21:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 22:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 22:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 22:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 22:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 22:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 22:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 22:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 22:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 22:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 22:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 22:55:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "Main",
      minute_window: "2023-06-15 23:00:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 23:05:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 23:10:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 23:15:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 23:20:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 23:25:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 23:30:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 23:35:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 23:40:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 23:45:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 23:50:00+05"
    },
    {
      date: "2023-06-15",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-15 23:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 00:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 00:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 00:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 00:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 00:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 00:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 00:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 00:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 00:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 00:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 00:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 00:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 00:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 01:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 02:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 03:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 03:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 03:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 03:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 03:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 03:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 03:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 03:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 03:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 03:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 03:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 03:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 04:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 05:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 05:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG",
      minute_window: "2023-06-16 05:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 05:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-16 05:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 05:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 05:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 05:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 05:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 05:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 05:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 05:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 06:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 06:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 06:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 06:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-16 06:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 06:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 06:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 06:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 06:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 06:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 06:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 06:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 07:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 07:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 07:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 07:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 07:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 07:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 07:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 07:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 07:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 07:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 07:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 08:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 08:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 08:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 08:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 08:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 08:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 08:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 08:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 08:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 08:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 08:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 08:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 09:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 09:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 09:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 09:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 09:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 09:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 09:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 09:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 09:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 09:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 09:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 09:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 10:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 10:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 10:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 10:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 10:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 10:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 10:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 10:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 10:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 10:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 10:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 11:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-16 12:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 12:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 12:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 12:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 12:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 12:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 12:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 12:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 12:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 12:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 12:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 12:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 13:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 13:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 13:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 13:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 13:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 13:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 13:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 13:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 13:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 13:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 13:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 14:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 15:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 15:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 15:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 15:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 15:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 15:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 15:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 15:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 15:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 15:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 15:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 15:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar",
      minute_window: "2023-06-16 16:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 16:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-16 16:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Undetermined",
      minute_window: "2023-06-16 16:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Undetermined",
      minute_window: "2023-06-16 16:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Undetermined",
      minute_window: "2023-06-16 16:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Undetermined",
      minute_window: "2023-06-16 16:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 16:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 16:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 16:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 16:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 16:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Undetermined",
      minute_window: "2023-06-16 17:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 17:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 17:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 17:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 17:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 17:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 17:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 17:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 17:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 17:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 17:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 17:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-16 18:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 19:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 20:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 21:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Main",
      minute_window: "2023-06-16 22:55:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:00:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:05:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:10:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:15:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:20:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:25:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:30:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:35:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:40:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:45:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:50:00+05"
    },
    {
      date: "2023-06-16",
      sourceTag: "Battery",
      minute_window: "2023-06-16 23:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 00:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 01:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 01:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 01:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 01:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 01:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 01:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 01:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 01:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 01:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 01:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 01:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 01:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 02:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 03:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 04:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 05:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 05:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 05:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 05:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 05:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 05:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 05:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 05:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 05:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 05:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 05:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 05:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 06:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 07:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-17 08:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-17 08:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-17 08:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-17 08:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-17 08:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-17 08:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-17 08:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 08:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-17 08:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 08:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 08:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 08:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 09:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 09:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 09:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 09:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 09:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 09:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 09:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 09:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 09:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 09:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 09:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 10:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 11:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 11:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 11:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 11:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 11:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 11:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 11:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 11:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 11:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 11:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 11:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 11:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 12:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 12:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 12:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 12:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 12:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 12:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 12:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 12:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 12:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 12:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 12:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Undetermined",
      minute_window: "2023-06-17 12:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 13:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 14:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar",
      minute_window: "2023-06-17 15:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-17 16:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Undetermined",
      minute_window: "2023-06-17 16:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Undetermined",
      minute_window: "2023-06-17 16:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Undetermined",
      minute_window: "2023-06-17 16:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 16:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 16:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 16:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 16:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 16:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 16:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 16:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 16:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 17:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 17:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 17:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 17:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 17:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 17:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 17:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 17:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-17 17:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 17:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 17:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 17:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 18:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 18:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 18:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 18:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 18:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 18:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 18:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 18:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 18:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-17 18:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-17 19:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-17 19:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-17 19:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-17 19:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-17 19:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-17 19:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-17 19:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 19:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 19:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 19:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 19:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 20:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 20:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 20:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 20:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 20:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 20:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 20:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 20:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 20:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 20:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 20:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 20:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 21:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 22:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 22:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 22:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 22:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 22:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 22:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 22:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 22:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 22:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 22:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Main",
      minute_window: "2023-06-17 22:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 22:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:00:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:05:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:10:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:15:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:20:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:25:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:30:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:35:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:40:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:45:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:50:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:55:00+05"
    },
    {
      date: "2023-06-17",
      sourceTag: "Battery",
      minute_window: "2023-06-17 23:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 00:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 01:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 01:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 01:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 01:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 01:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 01:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 01:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 01:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 01:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 01:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 01:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 01:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 02:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 03:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 04:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 04:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 04:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 04:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 04:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 04:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 04:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 04:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 04:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 04:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 04:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 04:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 05:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 05:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 05:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 05:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 05:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 05:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 05:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 05:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 05:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 05:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 05:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 05:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 06:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 07:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 08:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-18 08:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-18 08:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-18 08:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-18 08:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-18 08:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-18 08:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar+Battery",
      minute_window: "2023-06-18 08:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-18 08:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-18 08:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-18 08:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-18 08:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 09:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 09:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 09:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 09:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 09:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 09:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 09:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 09:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 09:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 09:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 09:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 09:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 10:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 10:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 10:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 10:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 10:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 10:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 10:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 10:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 10:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 10:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 10:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 10:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 11:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 12:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 12:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 12:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 12:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 12:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 12:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Undetermined",
      minute_window: "2023-06-18 12:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 12:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 12:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 12:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 12:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 12:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 13:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 14:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 15:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 15:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 15:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 15:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 15:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 15:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 15:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 15:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 15:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 15:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar",
      minute_window: "2023-06-18 15:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 15:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-18 16:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Undetermined",
      minute_window: "2023-06-18 16:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Undetermined",
      minute_window: "2023-06-18 16:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Undetermined",
      minute_window: "2023-06-18 16:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 16:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 16:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 16:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 16:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 16:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 16:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 16:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 16:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-18 17:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 18:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 19:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-18 19:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-18 19:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-18 19:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-18 19:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 19:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 19:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 19:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 19:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 19:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 19:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 19:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 20:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 20:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 20:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 20:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 20:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 20:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 20:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 20:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 20:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 20:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 20:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 20:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 21:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:05:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Main",
      minute_window: "2023-06-18 22:55:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 23:00:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 23:10:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 23:15:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 23:20:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 23:25:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 23:30:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 23:35:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 23:40:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 23:45:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 23:50:00+05"
    },
    {
      date: "2023-06-18",
      sourceTag: "Battery",
      minute_window: "2023-06-18 23:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 00:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 01:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 01:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 01:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 01:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 01:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 01:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 01:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 01:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 01:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 01:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 01:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 01:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 02:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 02:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 02:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 02:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 02:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 02:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 02:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 02:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 02:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 02:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 02:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 02:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 03:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 04:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 04:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 04:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 04:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 04:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 04:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 04:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 04:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 04:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 04:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 04:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 04:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 05:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 05:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 05:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 05:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 05:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 05:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 05:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 05:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 05:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 05:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 05:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 05:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 06:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 07:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 08:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 08:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 08:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 08:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 08:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 08:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 08:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 08:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 08:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 08:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 08:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 08:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 09:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 09:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 09:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 09:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 09:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 09:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 09:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 09:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 09:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 09:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 09:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 09:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 10:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 11:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 12:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 12:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 12:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 12:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 12:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 12:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Undetermined",
      minute_window: "2023-06-19 12:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 12:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 12:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 12:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 12:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 12:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 13:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 14:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 15:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 15:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 15:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 15:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 15:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 15:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 15:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 15:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 15:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar",
      minute_window: "2023-06-19 15:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 15:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 15:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-19 16:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Undetermined",
      minute_window: "2023-06-19 16:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Undetermined",
      minute_window: "2023-06-19 16:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Undetermined",
      minute_window: "2023-06-19 16:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 16:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 16:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 16:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 16:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 16:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 16:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 16:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 17:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 17:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 17:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 17:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 17:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 17:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 17:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 17:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 17:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 17:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 17:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 17:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 18:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 19:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 19:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-19 19:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 19:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 19:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 19:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 19:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 19:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 19:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 19:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 19:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 19:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main+Battery",
      minute_window: "2023-06-19 20:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 20:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 20:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 20:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 20:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 20:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 20:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 20:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 20:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 20:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 20:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 20:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 21:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 22:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 22:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 22:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 22:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 22:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 22:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 22:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 22:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 22:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 22:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 22:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Main",
      minute_window: "2023-06-19 22:55:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:00:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:05:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:10:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:15:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:20:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:25:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:30:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:35:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:40:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:45:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:50:00+05"
    },
    {
      date: "2023-06-19",
      sourceTag: "Battery",
      minute_window: "2023-06-19 23:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 00:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 01:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 02:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 03:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 04:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 04:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 04:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 04:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 04:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 04:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 04:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 04:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 04:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 04:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 04:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 04:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 05:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 05:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 05:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 05:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 05:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 05:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 05:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 05:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 05:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 05:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 05:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 05:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 06:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 06:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 06:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 06:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 06:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 06:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 06:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 06:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 06:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-20 06:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-20 06:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-20 06:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 07:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-20 07:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-20 07:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 07:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 07:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-20 07:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 07:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 07:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 07:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 07:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 07:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 07:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 08:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 08:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 08:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 08:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 08:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 08:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 08:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 08:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 08:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 08:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 08:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 08:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 09:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 09:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 09:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 09:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 09:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 09:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 09:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 09:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 09:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 09:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 09:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 09:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 10:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 10:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 10:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 10:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 10:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 10:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 10:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 10:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 10:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 10:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 10:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 10:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 11:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 12:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 13:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 13:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 13:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 13:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 13:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 13:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 13:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 13:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 13:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 13:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 13:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 13:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 14:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 15:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 15:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 15:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 15:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 15:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 15:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 15:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 15:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar",
      minute_window: "2023-06-20 15:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 15:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 15:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 15:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-20 16:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 16:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 16:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 16:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-20 16:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 16:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 16:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Undetermined",
      minute_window: "2023-06-20 16:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 16:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 16:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 16:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 16:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 17:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 18:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 18:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 18:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 18:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 18:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 18:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 18:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 18:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 18:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 18:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-20 18:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-20 18:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-20 19:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-20 19:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 19:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 19:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 19:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 19:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 19:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 19:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 19:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 19:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 19:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 19:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 20:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 20:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 20:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 20:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 20:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 20:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 20:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 20:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 20:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 20:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 20:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 20:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 21:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 22:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 22:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main",
      minute_window: "2023-06-20 22:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Main+Battery",
      minute_window: "2023-06-20 22:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 22:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 22:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 22:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 22:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 22:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 22:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 22:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-20 22:55:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:00:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:05:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:10:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:15:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:20:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:25:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:30:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:35:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:40:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:45:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:50:00+05"
    },
    {
      date: "2023-06-20",
      sourceTag: "Battery",
      minute_window: "2023-06-20 23:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 00:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 01:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 01:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-21 01:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 01:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 01:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 01:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 01:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 01:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-21 01:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 01:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-21 01:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-21 01:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 02:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-21 02:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 02:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 02:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 02:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 02:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 02:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 02:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-21 02:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 02:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-21 02:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 02:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 03:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 04:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 04:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 04:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 04:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 04:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 04:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-21 04:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Battery",
      minute_window: "2023-06-21 04:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 04:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 04:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 04:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG",
      minute_window: "2023-06-21 04:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 05:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 05:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 05:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Battery",
      minute_window: "2023-06-21 05:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 05:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 05:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 05:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 05:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 05:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 05:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 05:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 05:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 06:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 06:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 06:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 06:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 06:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 06:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 06:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 06:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 06:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 06:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 06:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 06:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 07:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 07:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 07:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 07:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 07:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 07:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 07:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 07:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 07:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 07:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-21 07:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-21 07:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 08:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 08:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-21 08:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "DG+Solar+Battery",
      minute_window: "2023-06-21 08:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 08:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 08:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 08:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 08:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Undetermined",
      minute_window: "2023-06-21 08:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 08:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 08:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 08:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 09:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 09:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 09:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 09:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 09:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 09:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 09:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 09:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 09:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 09:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 09:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 09:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 10:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 10:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 10:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 10:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 10:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 10:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 10:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 10:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 10:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 10:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 10:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 10:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 11:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 12:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 12:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 12:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 12:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 12:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 12:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 12:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 12:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 12:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 12:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 12:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 13:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 14:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 15:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 15:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 15:10:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 15:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 15:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 15:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar",
      minute_window: "2023-06-21 15:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 15:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 15:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 15:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 15:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 15:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-21 16:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-21 16:05:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-21 16:15:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-21 16:20:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-21 16:25:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-21 16:30:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-21 16:35:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-21 16:40:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-21 16:45:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-21 16:50:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Main+Solar",
      minute_window: "2023-06-21 16:55:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 17:00:00+05"
    },
    {
      date: "2023-06-21",
      sourceTag: "Solar+Battery",
      minute_window: "2023-06-21 17:05:00+05"
    }
  ];
  
  export default mockData;
  