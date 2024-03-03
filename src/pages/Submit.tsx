import { Button } from 'react-bootstrap';
import YouTubeVideo from '../YouTubeVideo';

const Submit = () => {
    return (
        <div>
            <h1>Video</h1>
            <YouTubeVideo videoId="dQw4w9WgXcQ" />
            <h2> Transcript</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <h1> Submit Notes</h1>
            <Button>Upload Notes</Button>
        </div>
    )
}
export default Submit;