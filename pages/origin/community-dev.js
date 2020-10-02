// @flow
import * as React from 'react'
import Layout from '../../components/Layout'
import CardHeader from '../../components/CardHeader'
import ExpandedCard from '../../components/ExpandedCard'
import { background } from '../../subsections/Origin'

export const header = (expanded: bool) => (
  <CardHeader isLarge={expanded} title='Community Development'>
    Helping Others.
  </CardHeader>
)

const CommunityDev = () => (
  <Layout background={background}>
    <ExpandedCard header={header}>
      <div>
        <p className='animate'>
          I was involved in a few online communities that used Simple Machine Forums (a relic today).
          A group with over a thousand members recruited me to join their web development team.
          From there, I began administrating forums and creating group organization tools.
        </p>
        <style jsx>{`
          p {
            font-family: 'Open Sans', sans-serif;
            font-size: 2.5vh;
            margin-top: 0;
          }

          p.animate {
            margin-top: 10px;
            opacity: 0;
            transform: translateY(80px) scale(0.95);
            animation: .7s slideIn cubic-bezier(0.65, 0.05, 0.36, 1) 0s forwards;
          }

          p.d-1 {
            animation-delay: .2s;
          }

          p.d-2 {
            animation-delay: .4s;
          }

          p.d-3 {
            animation-delay: .6s;
          }

          p.d-4 {
            animation-delay: .8s;
          }

          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateY(80px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: none;
            }
          }
        `}
        </style>
      </div>
    </ExpandedCard>
  </Layout>
)

export default CommunityDev
