export type CampusEvent = {
  id: number
  title: string
  date: string
  place: string
  seats: number
}

export const events: CampusEvent[] = [
  { id: 1, title: 'React study night', date: '2026-10-22', place: 'Room 302', seats: 20 },
  { id: 2, title: 'TypeScript workshop', date: '2026-10-25', place: 'Lab 104', seats: 3 },
  { id: 3, title: 'Campus Hackathon Pitch', date: '2026-11-02', place: 'Main Hall', seats: 50 },
  { id: 4, title: 'UI/UX Design Review', date: '2026-11-08', place: 'Room 210', seats: 12 },
]