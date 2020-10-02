// @flow
import * as React from 'react'
import Layout from '../../components/Layout'
import CardHeader from '../../components/CardHeader'
import ExpandedCard from '../../components/ExpandedCard'
import { background } from '../../subsections/Origin'

export const header = (expanded: bool) => (
  <CardHeader isLarge={expanded} title='Childhood Experiences'>
    Where I come from.
  </CardHeader>
)

const Childhood = () => (
  <Layout background={background}>
    <ExpandedCard header={header}>
      <div>
        <p className='animate'>
          From a young age, I had always been interested in Electronics and computers.
          As a young kid growing in a middle income and a strick christian family from Africa,
          Access from the internet has been pretty tough. But that has never been a problem from learning from the internet.
        </p>
        <p className='animate d-1'>
          I had grown to like the Electronics and cellphones, my love for them had grown me to pursue the studies
          to learn on how to make it. The internet itself has been better for me since then,
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

export default Childhood
