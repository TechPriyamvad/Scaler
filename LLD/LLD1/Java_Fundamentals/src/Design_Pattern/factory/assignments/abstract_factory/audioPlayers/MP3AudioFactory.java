package Design_Pattern.factory.assignments.abstract_factory.audioPlayers;

import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.decoder.AudioDecoder;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.decoder.MP3Decoder;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.player.AudioPlayer;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.player.MP3Player;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.processor.AudioProcessor;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.processor.MP3AudioProcessor;

public class MP3AudioFactory extends AudioFactory{
    @Override
    public MediaFormat supportsFormat() {
        return MediaFormat.MP3;
    }

    @Override
    public AudioDecoder createDecoder(byte[] audioData) {
        return new MP3Decoder(audioData);
    }

    @Override
    public AudioProcessor createProcessor(byte[] audioData) {
        return new MP3AudioProcessor(audioData);
    }

    @Override
    public AudioPlayer createPlayer(int volume, double playbackRate) {
        return new MP3Player(volume, playbackRate);
    }
}
