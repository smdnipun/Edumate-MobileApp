import React from 'react'
import { RootStack } from './src/components/RootStack'
import { StudentSubject } from './src/screens/student/StudentSubject'
import { StudentNotes } from './src/screens/student/StudentNotes'
import { StudentFeedback } from './src/screens/student/StudentFeedback'
import { StudentComment } from './src/screens/student/StudentComment'
import { StduentAnswerSheetUpload } from './src/screens/student/StduentAnswerSheetUpload'
import { Adminhome } from './src/screens/admin/Adminhome'
import { AdminStack } from './src/components/AdminStack'
import { AddSubjects } from './src/screens/admin/AddSubjects'

export default function App() {
  return (
    <>
    <RootStack />
    </>
  )
}

