package Design_Pattern.factory.assignments.abstract_factory.audioPlayers;

import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.decoder.AudioDecoder;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.player.AudioPlayer;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.processor.AudioProcessor;

public abstract  class AudioFactory {
    public abstract MediaFormat supportsFormat();
    public abstract AudioDecoder createDecoder(byte[] audioData);
    public abstract AudioProcessor createProcessor(byte[] audioData);
    public abstract AudioPlayer createPlayer(int volume, double playbackRate);
}
