function About() {
  return (
    <div className="page">
      <h1>A Little About Myself</h1>
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <a 
          href="https://www.linkedin.com/in/kehan-jin-76992427a/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: '#0077b5', 
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            fontWeight: '500',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.7'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/Jinkehan" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: '#333', 
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            fontWeight: '500',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.7'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          GitHub
        </a>
      </div>
      <p>
        Hi, I'm Kehan! I was born in Shanghai, China, where I spent my early years. Growing up, 
        pool became my main hobby - I spent countless hours at the table, learning the angles, 
        the strategy, and the patience that comes with the game. There was something meditative 
        about lining up a shot and seeing it through, and it taught me early on about focus and 
        precision.
      </p>
      <p>
        In 7th grade, my family moved to the Bay Area, which was a big change. It was my first 
        time living in the United States, and everything felt new - the culture, the school system, 
        even the way people talked. But pool was a constant, something familiar I could always 
        return to. It helped me find my footing during those first few years of adjusting to a 
        completely different environment.
      </p>
      <p>
        When high school came around, we moved again, this time to Ann Arbor, Michigan. I kept 
        playing pool, but I also discovered rowing and got really involved with our school's 
        rowing team. Rowing was completely different from pool - it was about teamwork, endurance, 
        and pushing through physical limits. Early morning practices on the water, the rhythm of 
        the oars, the feeling of the boat moving as one unit - it became a huge part of my life. 
        Being part of a team taught me about commitment, communication, and what it means to 
        work toward a common goal.
      </p>
      <p>
        After high school, I moved to Seattle, Washington to attend the University of Washington. 
        The Pacific Northwest opened up a whole new world of outdoor activities for me. I started 
        hiking, skiing, and climbing - activities that I'd never really had access to before. 
        The mountains here are incredible, and I found myself drawn to spending time outside. 
        I also picked up photography as a way to document these adventures, and it quickly 
        became another passion. Each new place I've lived has shaped me in different ways, and 
        Seattle has definitely pushed me toward more outdoor pursuits and a deeper appreciation 
        for nature.
      </p>
      <p>
        Now I'm studying Computer Science at UW, graduating in 2027. I'm really into software 
        development, distributed systems, and building full-stack applications. I love the 
        challenge of creating high-performance systems that actually work well. I've also worked 
        as a Data Analyst Intern at DIGILOG, where I got to work on automated data migration 
        pipelines and help with ERP system transitions. Most of my projects involve building 
        things from scratch - like a file search engine in C/C++, or React Native apps that 
        help students connect for activities and hobbies.
      </p>
      <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#333', fontSize: '1.5rem' }}>Hobbies</h2>
      
      <p>
        <strong>Hiking</strong> has become my go-to way to disconnect from screens and reconnect 
        with nature. There's something really satisfying about planning a route, checking the 
        weather, and then just heading out to explore. I love finding new trails around the 
        Pacific Northwest - the views here are incredible, and every hike feels like a mini 
        adventure. Whether it's a quick morning hike or a full day trek, I always come back 
        feeling refreshed and ready to tackle whatever coding problem I left behind.
      </p>
      
      <p>
        <strong>Backpacking</strong> takes that hiking experience to the next level. I enjoy 
        the challenge of packing everything I need for a few days into one pack and heading out 
        into the wilderness. There's a real sense of self-reliance that comes with carrying 
        your home on your back. I've done some multi-day trips through various mountain ranges, 
        and there's nothing quite like waking up to a sunrise from your tent or cooking dinner 
        by a campfire. It's also taught me a lot about planning, resource management, and 
        adapting when things don't go exactly as expected - skills that definitely come in 
        handy when debugging code.
      </p>
      
      <p>
        <strong>Climbing</strong> is probably the hobby that's most similar to problem-solving 
        in programming. Each route is like a puzzle - you need to figure out the sequence of 
        moves, understand the rock's features, and execute your plan. I do both indoor and 
        outdoor climbing, and each has its own appeal. Indoor climbing is great for working on 
        technique and strength, while outdoor climbing adds the element of reading the rock and 
        dealing with natural features. The mental focus required is intense, and I find it 
        really helps me clear my head after a long coding session.
      </p>
      
      <p>
        <strong>Photography</strong> is how I capture and share the places I explore. I started 
        taking photos to document my hiking and climbing trips, but it's grown into its own 
        passion. I love the technical challenge of getting the right exposure, composition, 
        and timing - it's like optimizing code, but for visual storytelling. Whether I'm 
        shooting landscapes, action shots of climbing, or candid moments on the trail, I'm 
        always trying to capture the feeling of being in that moment. It's also a great excuse 
        to slow down and really notice the details around me.
      </p>
    </div>
  )
}

export default About

