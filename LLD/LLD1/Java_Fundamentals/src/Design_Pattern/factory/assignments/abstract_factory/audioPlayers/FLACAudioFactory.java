package Design_Pattern.factory.assignments.abstract_factory.audioPlayers;

import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.decoder.AudioDecoder;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.decoder.FLACDecoder;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.player.AudioPlayer;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.player.FLACPlayer;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.processor.AudioProcessor;
import Design_Pattern.factory.assignments.abstract_factory.audioPlayers.processor.FLACAudioProcessor;

public class FLACAudioFactory extends AudioFactory{
    @Override
    public MediaFormat supportsFormat() {
        return MediaFormat.FLAC;
    }

    @Override
    public AudioDecoder createDecoder(byte[] audioData) {
        return new FLACDecoder(audioData);
    }

    @Override
    public AudioProcessor createProcessor(byte[] audioData) {
        return new FLACAudioProcessor(audioData);
    }

    @Override
    public AudioPlayer createPlayer(int volume, double playbackRate) {
        return new FLACPlayer(volume, playbackRate);
    }
}
