import React, { FunctionComponent, Fragment } from 'react'
import { NoteListItem } from '../NoteListItem'

interface NoteListProps {
  notes: any[]
}

export const NoteList: FunctionComponent<NoteListProps> = ({ notes }) => {
  return (
    <Fragment>
      {notes.map(({ node }) => {
        const { title, tags } = node.frontmatter
        const { name } = node.parent
        const { dateModified } = node.fields
        return (
          <NoteListItem
            title={title}
            tags={tags}
            name={name}
            dateModified={dateModified}
            key={name}
          />
        )
      })}
    </Fragment>
  )
}